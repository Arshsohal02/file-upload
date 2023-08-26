const express = require('express');
const multer = require('multer');
const mime = require('mime-types');

const app = express();
const port = 3000; 

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get('/', (req, res) => {
    res.send('Welcome to the file upload API');
});
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
    next();
    });
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const mimeType = mime.lookup(req.file.originalname);

    if (!mimeType) {
        return res.status(500).json({ message: 'Error while determining file type' });
    }

    const fileInfo = {
        originalname: req.file.originalname,
        mimetype: mimeType,
        size: req.file.size,
    };

    res.status(200).json(fileInfo);
});

app.listen(port, () => {
    console.log(`Server is running on https://file-upload-three-self.vercel.app/`);
});
