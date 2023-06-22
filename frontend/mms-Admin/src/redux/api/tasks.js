import axios from "@/config/axios";

export const deleteTaskApi = async (data) => {
  return await axios.delete(`/UserTask/task/${data}`, data);
};

export const editTaskApi = async (data) => {
  return await axios.put(`/UserTask/task/${data?.id}`, data);
};

export const getAllTasksApi = async (data) => {
  return await axios.get("/UserTask/get-tasks", data);
};

export const getCompletedTasksApi = async (data) => {
  return await axios.get("/UserTask/get-completed-tasks", data);
};

export const getInprogressTasksApi = async (data) => {
  return await axios.get("/UserTask/get-inprogress-tasks", data);
};

export const getWeeklyTasksApi = async (data) => {
  return await axios.get("/UserTask/get-weekly-tasks", data);
};

export const getMonthlyTasksApi = async (data) => {
  return await axios.get("/UserTask/get-monthly-tasks", data);
};

export const getYearlyTasksApi = async (data) => {
  return await axios.get("/UserTask/get-yearly-tasks", data);
};

export const createTaskApi = async (data) => {
  return await axios.post("/UserTask/task", data);
};

export const getTaskDetailsApi = async (data) => {
  return await axios.get(`/UserTask/tasks/${data}`, data);
};
