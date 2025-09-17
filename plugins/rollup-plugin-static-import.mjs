// plugins/rollup-plugin-static-css.mjs
import path from 'path';
import fg from 'fast-glob';

export default function staticImportCss(options) {
  return {
    name: 'static-import-css',

    buildStart() {
      // 找到所有 css.js 文件
      const files = fg.sync(options.include);
      files.forEach((file) => {
        // 把每个 css.js 标记为入口（确保被引入）
        this.emitFile({
          type: 'asset',
          id: path.resolve(file),
        });
      });
    },
  };
}
