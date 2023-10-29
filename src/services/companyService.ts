import { Company } from '../models/company';

interface Company {
  company_name: string;
  company_email: string;
}

async function createCompany(companyData: Company) {
  try {
    const company = await Company.build({
      company_name: companyData.company_name,
      company_email: companyData.company_email,
      campaigns: [],
      users: [],
    });
    return company.save();
  } catch (error: any) {
    throw new Error('Error creating company: ' + error.message);
  }
}

async function modifyCompany(companyId: string, newData: Partial<Company>) {
  try {
    const company = await Company.findByIdAndUpdate(companyId, newData, {
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

async function addCampaignToCompany(companyId: string, campaignId: string) {
  try {
    const company = await Company.findById(companyId);
    if (!company) {
      throw new Error('Company not found');
    }
    company.campaigns.push(campaignId);
    await company.save();
    return company;
  } catch (error: any) {
    throw new Error('Error adding campaign to company: ' + error.message);
  }
}

async function addUserToCompany(companyId: string, userId: string) {
  try {
    const company = await Company.findById(companyId);
    if (!company) {
      throw new Error('Company not found');
    }
    company.users.push(userId);
    await company.save();
    return company;
  } catch (error: any) {
    throw new Error('Error adding user to company: ' + error.message);
  }
}

export { createCompany, modifyCompany, addCampaignToCompany, addUserToCompany };
