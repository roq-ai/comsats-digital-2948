interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Customer Service Representative'],
  customerRoles: [],
  tenantRoles: ['Customer Service Representative'],
  tenantName: 'Bank',
  applicationName: 'COMSATS DIGITAL BANKING SERVICES',
  addOns: ['notifications', 'chat', 'file'],
};
