// 引入 Node.js 内置的 http 模块，用于创建 HTTP 服务器
const http = require('http');

// 定义服务器监听的端口号
const PORT = 3000;

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  // 设置响应头，状态码为 200，内容类型为 text/html，编码为 UTF-8
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  // 向客户端返回内容
  res.end('<h1>你好，世界！Hello World!</h1>');
});

// 启动服务器，监听指定端口
server.listen(PORT, () => {
  // 服务器启动成功后，在控制台输出提示信息
  console.log(`服务器已启动，请访问 http://localhost:${PORT}`);
});