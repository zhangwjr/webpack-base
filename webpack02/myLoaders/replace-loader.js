// loader的结构: 不能是箭头函数
// 通过source参数接受模块内容
// loader必须有返回值
// loader是可以接受参数的，配置 
// 如何返回多个信息
// 如何处理异步逻辑
// 多个loader的使用，应该注意顺序（从右往左，上一个loader返回的信息给到下一个loader使用）
module.exports = function(source){
  // console.log('zwj',typeof source);
  const code = source.replace('hello','你好')
  // console.log('zww',code);
  // 完成js文件中内容的替换
  return code
}