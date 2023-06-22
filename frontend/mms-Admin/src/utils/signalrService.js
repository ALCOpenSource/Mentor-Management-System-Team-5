import { HubConnectionBuilder } from "@microsoft/signalr";

const hubUrl = "https://your-signalr-server-url";

const connection = new HubConnectionBuilder().withUrl(hubUrl).build();

export const startSignalRConnection = async () => {
  // try {
  //   await connection.start();
  //   console.log("SignalR connection established.");
  // } catch (err) {
  //   console.error("Error while establishing SignalR connection:", err);
  // }
};

export const addSignalRMessageListener = (callback) => {
  connection.on("ReceiveMessage", callback);
};
