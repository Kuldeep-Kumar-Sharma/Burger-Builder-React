import axios from "axios";

const instance = axios.create({
  baseURL: "https://telebot-9de6e.firebaseio.com/",
});

export default instance;
