import {
  createCompanyController,
  modifyCompanyController,
} from '../controllers/companyController';

const express = require('express');
const router = express.Router();

router
  .post('/create-company', createCompanyController)
  .put('/modify-company', modifyCompanyController);

// module.exports = router;
export { router as companyRoutes };
