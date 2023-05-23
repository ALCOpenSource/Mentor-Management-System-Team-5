import axios from "@/config/axios";

export const getAllReportsApi = async (data) => await axios.get("/Report/reports", data);
export const getWeeklyReportsApi = async (data) => await axios.get("/Report/get-weekly-reports", data);
export const getMonthlyReportsApi = async (data) => await axios.get("/Report/get-Monthly-reports", data);
export const getYearlyReportsApi = async (data) => await axios.get("/Report/get-yearly-reports", data);
export const createNewReportApi = async (data) => await axios.post("/Report/report", data);
export const editReportApi = async (data) => await axios.put(`/Report/report/${data}`, data);
