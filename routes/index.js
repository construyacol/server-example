import express from 'express'
import questionCtrl from '../controller/question'

const api = express.Router()

api.get('/question', questionCtrl.getQuestions)
api.get('/question/:questionId', questionCtrl.getQuestion)

export default api
