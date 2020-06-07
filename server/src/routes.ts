import express from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import validate from './config/validate';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);
routes.post(
  '/points',
  upload.single('image'),
  validate,
  pointsController.store,
);

export default routes;
