import {
  createUserController,
  modifyUserController,
} from '../controllers/userController';

const express = require('express');
const router = express.Router();

router
  .post('/create-user', createUserController)
  .put('/modify-user', modifyUserController);

// module.exports = { router };
// module.exports = router;
export { router as userRoutes };
