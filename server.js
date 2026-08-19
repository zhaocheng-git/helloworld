// 引入 Express 框架
const express = require('express');
// 引入 cors 中间件，处理跨域请求
const cors = require('cors');

// 创建 Express 应用
const app = express();

// 使用 cors 中间件，允许跨域请求
app.use(cors());

// 使用 express.json 中间件，解析请求体中的 JSON 数据
app.use(express.json());

// 定义服务器监听的端口号
const PORT = 3000;

// GET /api/hello 接口，返回一个简单的问候信息
app.get('/api/hello', (req, res) => {
  res.json({ message: '你好，来自后端的问候！' });
});

// POST /api/greet 接口，接收请求体中的 name 字段，返回个性化问候
app.post('/api/greet', (req, res) => {
  const name = req.body.name || '朋友';
  res.json({ message: `你好，${name}！` });
});

// 启动服务器，监听指定端口
app.listen(PORT, () => {
  console.log(`后端服务已启动：http://localhost:${PORT}`);
});