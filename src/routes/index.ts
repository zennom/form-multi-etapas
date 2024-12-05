import {Router} from 'express'
import * as usuarioController from '../controllers/usuarioController'

const router = Router()

router.get('/',usuarioController.index)

router.get('/etapa1',usuarioController.etapa1)
router.post('/etapa1',usuarioController.etapa1Post)

router.get('/etapa2',usuarioController.etapa2)
router.post('/etapa2',usuarioController.etapa2Post)

router.get('/etapa3',usuarioController.etapa3)

router.post('/submit',usuarioController.submit)


export default router