const express = require('express');
const { createTest, getTest } = require('../controllers/testController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authenticate, authorize(['therapist', 'admin']), createTest);
router.get('/:id', getTest);

module.exports = router;
