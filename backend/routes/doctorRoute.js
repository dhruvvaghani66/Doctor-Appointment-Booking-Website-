// import express from 'express'
// import { doctorList } from '../controllers/doctorController.js'

// const doctorRouter = express.Router()

// doctorRouter.get('/list', doctorList)

// export default doctorRouter


import express from 'express'
import { doctorList } from '../controllers/doctorController.js'

const doctorRouter = express.Router()

doctorRouter.get('/list', doctorList)

export default doctorRouter

