/*
  引入模块
    import {模块中暴露内容} from '模块路径'
 */

import {foo1, name} from './module1';  //引入分别暴露
import {fn1, fn2} from './module2';    //引入统一暴露
import Person from './module3';        //引入默认暴露

foo1();
console.log(name);
fn1();
fn2();
const p = new Person('Rose');
console.log(p.name);


/*
  在package.json文件中也可以自己添加命令
    在scripts属性中添加命令："build": "babel src -d build && browserify build/app.js -o dist/bundle.js"
    两条命令中间用 && 隔开
 */