import * as express from 'express'
import UsersController from './usersController'

const router = express.Router()

router.post('/', UsersController.register)
router.post('/login', UsersController.login)

export default router