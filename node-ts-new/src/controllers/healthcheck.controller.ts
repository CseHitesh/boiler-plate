import { asyncHandler } from "../utils/asyncHandler";

export const healthCheck = asyncHandler(async (req, res) => {
  return res.send("app working fine");
});
