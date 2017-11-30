import express from 'express'
import api from './routes'

const app = express()

app.get('/', (req, res) => {
	res.send('Hola desde express!')
})
app.use('/api', api)

export default app