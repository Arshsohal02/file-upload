const express = require('express');
const multer = require('multer');
const mime = require('mime-types');

const app = express();
const port = 3000; // You can change this port if needed

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get('/', (req, res) => {
    res.send('Welcome to the file upload API');
});

app.post('/upload', upload.single('file'), (req, res) => {
    // Check if a file was uploaded
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    // Determine the MIME type of the uploaded file
    const mimeType = mime.lookup(req.file.originalname);

    if (!mimeType) {
        return res.status(500).json({ message: 'Error while determining file type' });
    }

    const fileInfo = {
        originalname: req.file.originalname,
        mimetype: mimeType,
        size: req.file.size,
        //print file type
    };

    res.status(200).json(fileInfo);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
