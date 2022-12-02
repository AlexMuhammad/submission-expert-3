import CONFIG_RES from './config-restaurant';

const API_ENDPOINT = {
  RESTAURANTS: `${CONFIG_RES.URL_BASE}list`,
  DETAIL: (id) => `${CONFIG_RES.URL_BASE}detail/${id}`,
  ADD_REVIEW: `${CONFIG_RES.URL_BASE}review`,
};

export default API_ENDPOINT;
