import { Router } from 'express'
import * as recipesCtrl from '../controllers/recipes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/:query', recipesCtrl.searchRecipes)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/profile/:profileId', checkAuth, recipesCtrl.index)
router.post('/:profileId', checkAuth, recipesCtrl.create)

export { router }
