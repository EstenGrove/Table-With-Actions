const endpoints = {
  base: "https://apitest.aladvantage.com/alaservices/v1/",
  auth: {
    login: "Security/Login",
    logout: "Security/Logout",
    loginStatus: "Security/LoginValid"
  },
  getData: {
    count: "Data/Count",
    get: "Data/Get",
    get2: "Data/Get2",
    delete: "Data/Delete",
    execute: "Data/Execute",
    insert: "Data/Insert",
    save: "Data/Save",
    update: "Data/Update"
  },
  fetchADLs: {
    byCategory: "Advantage/GetAssessmentCategory",
    byResident: "Advantage/GetAssessmentResidentTask",
    byFacility: "Advantage/GetAssessmentFacilityTask",
    byFacilityCategory: "Advantage/GetFacilityCategory"
  },
  residentData: {
    inventory: "Advantage/GetResidentInventory",
    bowel: "Advantage/GetResidentBowelMovements",
    photos: "Advantage/GetResidentPhotos",
    weight: "Advantage/GetResidentWeight",
    residents: "Advantage/GetResidents",
    summary: "Advantage/GetSummary"
  },
  download: {
    getFile: "Download/GetFile",
    getFileMany: "Download/GetFileMany"
  }
};

const { download, residentData, fetchADLs, getData, auth, base } = endpoints;

export { download, residentData, fetchADLs, getData, auth, base };
