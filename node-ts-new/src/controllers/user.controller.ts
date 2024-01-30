import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

export const findAll = asyncHandler(async (req, res) => {
  if (true) {
    throw new ApiError(404, "Todo does not exist");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "todo", "Todo fetched successfully"));
});
