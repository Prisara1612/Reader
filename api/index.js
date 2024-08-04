const express = require('express');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { db, connectDB } = require('./db');
// const connectDB =require('.//connection')

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../blog/public/upload'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Routes
// app.get('/',function(req,res){
//   res.send("hello")
// });

app.post('/api/upload', upload.single('file'), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Start the server
connectDB()
const PORT = 8800;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
