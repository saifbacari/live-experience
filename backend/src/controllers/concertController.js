const db = require('../config/db');

const getConcerts = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM concerts ORDER BY date ASC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur lors de la récupération des concerts' });
    }
};

module.exports = {
    getConcerts
}; 