/*
  定义没有依赖的模块
*/

define(function () {
  console.log('dataServer模块被加载了！');
  var msg = 'hello';
  function dataServer() {
    return msg.toUpperCase();
  }
  //暴露模块内容
  return dataServer;
})


