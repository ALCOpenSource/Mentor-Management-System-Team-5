const useGetUserInfo = () => {
  let userData = JSON.parse(localStorage.getItem("userData"));
  return userData;
};

export default useGetUserInfo;
