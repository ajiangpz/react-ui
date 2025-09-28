"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _glob = _interopRequireDefault(require("glob"));

var _pluginutils = require("@rollup/pluginutils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const makePathAbsolute = (p, rootPath) => {
  if (_path.default.isAbsolute(p)) {
    return p;
  }

  return _path.default.join(rootPath, p);
};

var _default = (opts = {}) => {
  if (!opts.include) {
    throw new Error('include option should be specified');
  }

  const projectRoot = opts.projectRoot || process.cwd();
  const absoluteIncludes = opts.include.map(p => makePathAbsolute(p, projectRoot));
  const absoluteExcludes = (opts.exclude || []).map(p => makePathAbsolute(p, projectRoot));
  const filter = (0, _pluginutils.createFilter)(absoluteIncludes, absoluteExcludes, {
    resolve: false
  });
  const baseDir = makePathAbsolute(opts.baseDir || 'src', projectRoot);
  return {
    name: 'static-import',

    resolveId(source, importer) {
      const id = makePathAbsolute(_path.default.join(_path.default.dirname(importer || './'), source), projectRoot);

      if (!filter(id)) {
        return;
      }

      return {
        id: source,
        external: true
      };
    },

    buildStart() {
      absoluteIncludes.flatMap(inc => _glob.default.sync(inc)).forEach(id => {
        this.emitFile({
          type: 'asset',
          source: _fs.default.readFileSync(id),
          fileName: _path.default.relative(baseDir, id)
        });
        this.addWatchFile(id);
      });
    },

    watchChange(id) {
      if (!filter(id)) {
        return;
      }

      this.emitFile({
        type: 'asset',
        source: _fs.default.readFileSync(id),
        fileName: _path.default.relative(baseDir, id)
      });
    }

  };
};

exports.default = _default;