## 安装gm工具库
### linux安装
```
sudo apt-get install libpng-dev
wget http://pilotfiber.dl.sourceforge.net/project/graphicsmagick/graphicsmagick/1.3.23/GraphicsMagick-1.3.23.tar.xz
xz -d GraphicsMagick-1.3.23.tar.xz
tar -xf GraphicsMagick-1.3.23.tar
cd GraphicsMagick-1.3.23
./configure
make && make install
```
### windows安装
下载 GraphicsMagick-1.3.23-Q16-win64-dll.exe 文件，然后添加环境变量

## gulp 配置实例
```
var thumbnail = require('gulp-jingoal-thumbnail');
/*缩略图*/
gulp.task('thumbnailtask', function () {
    return gulp.src(appPath + '/dest/imgs/2x/*.png')
        .pipe(thumbnail("../1x"));
});
```