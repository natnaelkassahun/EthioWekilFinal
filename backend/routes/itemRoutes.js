const express = require("express")
const router = express.Router()
const cors = require("cors")
const uploadPhoto = require("../middleware/upload.js")
const { getItem, addItem, updateItem, deleteItem } = require("../controllers/itemController")

router.get('/', cors(), getItem)

/* The post request must have a body elemnt with name images */
router.post('/', uploadPhoto.array('images'), addItem)

router.put('/:id', updateItem)

router.delete('/:id', deleteItem)

module.exports = router