const express = require('express')
const app = express()
const PORT = 8080
const HOST = '0.0.0.0'

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const router = express.Router()
const produtoController = require('./controller/produto.controller')
router.get('/', produtoController.get)
router.get('/:id', produtoController.getById)
router.post('/', produtoController.create)
router.put('/:id', produtoController.update)
router.delete('/:id', produtoController.remove)
app.use('/produtos', router)
app.listen(PORT, HOST, () => {
  console.log('server running at http://0.0.0.0:8080')
})
