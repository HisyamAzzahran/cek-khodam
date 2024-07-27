const express = require('express');
const bodyParser = require('body-parser');
const handler = require('./cekkhodam').default;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/api/cekKhodam', handler);

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
