const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    name: 'JUNIO',
    urls: [
      { type: 'GITHUB', url: 'https://github.com/Welington156' }
    ]
  });
});

module.exports = router;
