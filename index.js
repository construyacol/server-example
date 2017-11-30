import config from './config'
import app from './app'
import http from 'http'
import Debug from 'debug'

const debug = new Debug('platzi-overflow:root')

app.listen(config.port, () => {
	debug(`Server runnig at port ${config.port}`)
})