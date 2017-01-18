var gulp           = require('gulp'),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		autoprefixer   = require('gulp-autoprefixer'),
		bourbon        = require('node-bourbon'),
		notify         = require("gulp-notify");

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('sass', function() {
	return gulp.src('sass/**/*.sass')
	.pipe(sass({
		includePaths: require("bourbon").includePaths}).on("error", notify.onError()))
	//.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	//.pipe(cleanCSS())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'browser-sync'], function() {
	gulp.watch('sass/**/*.sass', ['sass']);
	gulp.watch(['libs/**/*.js', 'app/js/main.js']);
	gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('default', ['watch']);