// @ts-check
import path from "node:path";
function resolveRelativeImports() {
  return {
    name: "resolve-relative-imports",
    resolveId(source, importer) {
      if (source.startsWith("./css.js")) {
        return path.resolve(path.dirname(importer), source);
      }
      return null;
    },
    
  };

}

export default resolveRelativeImports;
