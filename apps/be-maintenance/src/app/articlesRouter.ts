import { auth, optionalAuth } from '@assignment/middleware';
import * as express from 'express';
import ArticlesController from './articlesController';
const router = express.Router();

router.get('/', optionalAuth, ArticlesController.getGlobal);
router.get('/feed', auth, ArticlesController.getFeed);
router.get(`/:slug`, optionalAuth, ArticlesController.getArticle);
router.put(`/:slug`, auth, ArticlesController.updateArticle);
router.delete(`/:slug`, auth, ArticlesController.deleteArticle);
router.post('/', auth, ArticlesController.create);

export default router;
