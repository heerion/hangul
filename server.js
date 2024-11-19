const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

// MySQL 연결 설정
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'im@09181015',
  database: 'hangul',
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });  

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// 정적 파일 제공
app.use(express.static('public'));

// 기본 라우트
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

