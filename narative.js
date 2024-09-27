const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Mengatur folder untuk file statis
app.use(express.static(path.join(__dirname, 'public')));

// Rute untuk mengakses file HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
