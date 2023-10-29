import { createCompany, modifyCompany } from '../services/companyService';

async function createCompanyController(req: any, res: any) {
  const { company_name, company_email } = req.body;
  const createdCompany = await createCompany({ company_name, company_email });
  res.status(201).json(createdCompany);
}

async function modifyCompanyController(req: any, res: any) {
  const companyData = req.body;
  const { company_id } = req.body;
  const modifiedCompany = await modifyCompany(company_id, companyData);
  res.status(201).json(modifiedCompany);
}

export { createCompanyController, modifyCompanyController };
