// css 序列化
module.exports = function(source){
  console.log('wjcss',typeof source);
  return JSON.stringify(source)
}