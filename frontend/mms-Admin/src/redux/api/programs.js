import axios from "@/config/axios";

export const deleteProgramApi = async (data) => {
  return await axios.delete(`/Programs/program/${data}`, data);
};

export const editProgramApi = async (data) => {
  return await axios.put(`/Programs/program/${data?.id}`, data);
};

export const getAllProgramsApi = async (data) => {
  return await axios.get("/Programs/allPrograms", data);
};

export const getArchivedProgramsApi = async (data) => {
  return await axios.get("/Programs/archivedPrograms", data);
};

export const getActiveProgramsApi = async (data) => {
  return await axios.get("/Programs/active-programs", data);
};

export const getActiveProgramsByWeekApi = async (data) => {
  return await axios.get("/Programs/get-active-programs-byweek", data);
};

export const getActiveProgramsByMonthApi = async (data) => {
  return await axios.get("/Programs/get-active-programs-bymonth", data);
};

export const getActiveProgramsByYearApi = async (data) => {
  return await axios.get("/Programs/get-active-programs-byyear", data);
};

export const createProgramApi = async (data) => {
  return await axios.post("/Programs/programs", data);
};

export const getProgramDetailsApi = async (data) => {
  return await axios.get(`/Programs/programs/${data}`, data);
};
