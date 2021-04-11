import axios from "axios";


const axiosConfig = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  headers:{
    "Content-type": "application/json"
  }
});

export default axiosConfig;
