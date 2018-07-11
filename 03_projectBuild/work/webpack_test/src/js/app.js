import {mul, add} from "./module1";
import sum from './module2';
import data from '../json/data';
import '../less/test1.less';  //less文件直接解析不了，不识别id的 # 号，需要配置文件
import '../less/test2.less';

console.log(add(3, 4));
console.log(add(10, 10));
console.log(mul(3, 4));
console.log(sum(1, 2, 3, 4, 5));
console.log(data.name, data.age); //data.json文件转为一个对象