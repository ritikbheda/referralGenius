import { User, UserAttrs } from '../models/user';

async function createUser(userData: UserAttrs) {
  try {
    const company = await User.build({
      email: userData.email,
      company_id: userData.company_id,
    });
    return company.save();
  } catch (error: any) {
    throw new Error('Error creating company: ' + error.message);
  }
}

async function modifyUser(userId: string, newData: Partial<UserAttrs>) {
  try {
    const company = await User.findByIdAndUpdate(userId, newData, {
      new: true,
    });
    if (!company) {
      throw new Error('Company not found');
    }
    return company;
  } catch (error: any) {
    throw new Error('Error modifying company: ' + error.message);
  }
}

export { createUser, modifyUser };
