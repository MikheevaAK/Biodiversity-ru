const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
app.use(cors()); 
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true, 
  auth: {
    user: 'lifenornickel@yandex.ru',
    pass: 'crsyvwlwukjszilf'
  }
});

app.post('/send-email', (req, res) => {
  const { name, mail } = req.body;

  console.log(req, res);

  const mailOptions = {
    from: 'lifeNornickel@yandex.ru',
    to: 'mikheeva.anastasia99@gmail.com',
    subject: 'Message from your website',
    text: `${name}, ${mail}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server is running on http://127.0.0.1:3000/');
});