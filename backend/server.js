const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('./db');

const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) =>
  res.send("Admin Dashboard Backend running ✅")
);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
