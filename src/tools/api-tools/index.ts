import getInternalAnalytics from "./getInternalAnalytics.js";
import getMerchantByName from "./getMerchantByName.js";
import { ApiToolConfig } from "./types.js";

export const C_FApiDefinitions: ApiToolConfig[] = [
  getMerchantByName,
  getInternalAnalytics,
];

export default C_FApiDefinitions;
export {
  getInternalAnalytics,
  getMerchantByName,
  ApiToolConfig,
};