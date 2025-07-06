// testResults.js
import axiosInstance from "./axiosInstance";

export const getTestResults = async () => {
  const response = await axiosInstance.get("/testResults");
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await axiosInstance.post("/testResults", resultData);
  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await axiosInstance.delete(`/testResults/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  const response = await axiosInstance.patch(`/testResults/${id}`, {
    visibility,
  });
  return response.data;
};