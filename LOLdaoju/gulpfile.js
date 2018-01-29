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
gulp.task("scss-re", () => {
    return gulp.src("scss/register.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minify())
    .pipe(rename("register-min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})
gulp.task("scss-head", () => {
    return gulp.src("scss/head.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minify())
    .pipe(rename("head-min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})
gulp.task("scss-foot", () => {
    return gulp.src("scss/foot.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minify())
    .pipe(rename("foot-min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})
gulp.task("scss-buy", () => {
    return gulp.src("scss/buy.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minify())
    .pipe(rename("buy-min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})

gulp.task("scss-sc", () => {
    return gulp.src("scss/sc.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minify())
    .pipe(rename("sc-min.css"))
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
gulp.task("php", function(){
    return gulp.src("php/*.php")
    .pipe(gulp.dest("dist/php"))
    .pipe(connect.reload())
})

//整理这些文件
gulp.task("build", ["copy-html", "image", "scss", "scss-re", "scss-sc", "scss-head", "scss-foot", "scss-buy", "scripts", "data", "php"])

gulp.task("watch", function(){
    gulp.watch("html/*.html", ["copy-html"]);
    gulp.watch("image/**/*",["image"]);
    gulp.watch("scss/index.scss", ["scss"]);
    gulp.watch("scss/register.scss", ["scss-re"]);
    gulp.watch("scss/head.scss", ["scss-head"]);
    gulp.watch("scss/foot.scss", ["scss-foot"]);
    gulp.watch("scss/buy.scss", ["scss-buy"]);
    gulp.watch("scss/sc.scss", ["scss-sc"]);
    gulp.watch("js/*.js", ["scripts"]);
    gulp.watch("data/*.json", ["data"]);
    gulp.watch("php/*.php", ["php"]);
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
