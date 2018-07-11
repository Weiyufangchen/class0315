/*
  运行grunt指令，会去加载读取的配置文件
 */

module.exports = function (grunt) {
  //此模块被调用时，会注入一个实参进来，要声明形参去接收它
  //1. 初始化插件配置
  grunt.initConfig({
    babel: {      //配置任务名
      options: {  //配置选项
        sourceMap: false,
        presets: ['es2015']
      },
      dist: {
        files: [{
          expand:true,     //如果设为true，就表示下面文件名的占位符（即*号）都要扩展成具体的文件名。
          cwd:'src/',      //js目录下
          src:['**/*.js'], //所有js文件
          dest:'build/'    //输出到此目录下
        }]
      }
    },
    jshint: {
      options: {  //检查规则
        "curly": true,
        "eqnull": true,   //检查是否可以等于一个null，true表示可以
        "eqeqeq": true,   //三个等号 ===
        // "undef": true, //不允许使用未定义的变量
        "esversion": 6,   //es版本
        "globals": {      //全局的，里面变量不用检查
          "jQuery": true
        }
      },
      all: ["Gruntfile.js", "src/js/*.js"]  //检查所有的文件
    },
    concat: {
      options: {
        separator: ';',  //连接符
      },
      dist: {
        src: ['build/js/*.js'],
        dest: 'build/js/built.js',
      }
    }
  });
  //2. 加载插件任务
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  //3. 注册构建任务
  grunt.registerTask('default', ['jshint', 'babel', 'concat']);  //执行顺序从左到右，同步
};