const gulp = require("gulp");
require("../gulpfile.js");

function compileLib() {
  const taskInstance = gulp.task("compileLib");
  if (taskInstance === undefined) {
    console.error("no task named compileLib registered");
    return;
  }
  taskInstance.apply(gulp);
}

compileLib();
