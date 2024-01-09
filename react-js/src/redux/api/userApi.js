// import axiosInstance from "./api";

 export const getUsers = async () => {
  try {
    // const response = await axiosInstance.get("/branch");
    // return response.data;
  } catch (error) {
    throw error.response.data;
  }
};



