import axios from "../utilities/axios";

const ApplicationService = {
  async getApplication() {
    const application = await axios.get(`/application`);
    return application;
  },
};

export default ApplicationService;
