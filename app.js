const express = require('express');
const multer = require('multer'); // Middleware for handling file uploads
const mime = require('mime-types'); // Library for working with MIME types

const app = express();
const port = 3000; // Port on which the server will listen

// Configure multer to use memory storage for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the file upload API');
});

// Enable Cross-Origin Resource Sharing (CORS) for all routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Allow specific headers
    next();
});

// Define a route for handling file uploads using a POST request
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' }); // No file provided in the request
    }

    // Determine the MIME type of the uploaded file
    const mimeType = mime.lookup(req.file.originalname);

    if (!mimeType) {
        return res.status(500).json({ message: 'Error while determining file type' }); // Unable to determine MIME type
    }

    // Prepare information about the uploaded file
    const fileInfo = {
        originalname: req.file.originalname,
        mimetype: mimeType,
        size: req.file.size,
    };

    // Respond with information about the uploaded file
    res.status(200).json(fileInfo);
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
});
