const express = require('express');
const cors = require('cors');
const concertRoutes = require('./routes/concertRoutes');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/concerts', concertRoutes);

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
}); 