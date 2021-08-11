module.exports = function(source){
  // console.log('wjj',this.async());
  const callback = this.async();
  setTimeout(() => {
    let result = source.replace('webpack',this.query.name)
    // callback的第一个参数是error,如果没有就传null
    callback(null,result)
  }, 3000);
  return 
}