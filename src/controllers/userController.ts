import { createUser, modifyUser } from '../services/userService';
import { addUserToCompany } from '../services/companyService';

async function createUserController(req: any, res: any) {
  const { company_id, email } = req.body;
  const createdUser = await createUser({ email, company_id });
  // update company with new user id
  await addUserToCompany(company_id, createdUser._id);
  res.status(201).json(createdUser);
}

async function modifyUserController(req: any, res: any) {
  const { user_id } = req.body;
  const userData = req.body;
  const modifiedUser = await modifyUser(user_id, userData);
  res.status(201).json(modifiedUser);
}

export { createUserController, modifyUserController };
