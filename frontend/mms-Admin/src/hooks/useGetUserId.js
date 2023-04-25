export default function useGetUserId() {
  const userId = JSON.parse(localStorage.getItem("userData"))?.id;
  return userId;
}
