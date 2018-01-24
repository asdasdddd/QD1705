var gulp = require("gulp");
gulp.task("copy-html", function(){
    return gulp.src("html/*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload())
})

gulp.task("image", function(){
    return gulp.src("image/**/*")
    .pipe(gulp.dest("dist/image"))
    .pipe(connect.reload())
})

const scss=require("gulp-sass-china");

const minify = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("scss", () => {
    return gulp.src("scss/index.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minify())
    .pipe(rename("css-min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})

gulp.task("scripts", function(){
    return gulp.src("js/*.js")
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload())
})
gulp.task("data", function(){
    return gulp.src("data/*.json")
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload())
})

//整理这些文件
gulp.task("build", ["copy-html", "image", "scss", "scripts", "data"])

gulp.task("watch", function(){
    gulp.watch("html/*.html", ["copy-html"]);
    gulp.watch("image/**/*",["image"]);
    gulp.watch("scss/index.scss", ["scss"]);
    gulp.watch("js/*.js", ["scripts"]);
    gulp.watch("data/*.json", ["data"]);
})

//启动服务器
const connect = require("gulp-connect");
gulp.task("server", function(){
    connect.server({
        root: "dist",
        port: 9999,
        livereload: true
    })
})

gulp.task("default", ["watch", "server"])
