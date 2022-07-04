import { Router } from 'express'

const ACRouter = Router()

ACRouter.post('/', () => {})
ACRouter.get('/search', () => {})
ACRouter.get('/:id', () => {})
ACRouter.put('/:id', () => {})
ACRouter.delete('/:id', () => {})

export { ACRouter }