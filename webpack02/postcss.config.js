module.exports = {
  plugins: [require("autoprefixer"),require("cssnano")]// 目标浏览器的环境
}
// autoprefixer  处理css加前缀
// cssnano 处理css压缩

// css优化的方案：1.去掉冗余  2.压缩