// 创建style标签
// 将css内容放进style标签
// 将style标签放入html的head头部
module.exports = function(source){
  console.log('sswj',typeof source);
  return `
    const tag = document.createElement('style');
    tag.innerHTML = ${source};
    document.head.appendChild(tag);
  `
}