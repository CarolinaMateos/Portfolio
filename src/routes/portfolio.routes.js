const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        status: 'API WORKS'
    });
})

module.exports = router;