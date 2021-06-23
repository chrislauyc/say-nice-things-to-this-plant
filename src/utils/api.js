import axios from "axios";

const api = () => {
  return axios.create({
    baseURL: "http://api.rideuta.com/SIRI/SIRI.svc/VehicleMonitor/",
    responseType:'text',
    headers:{
        'x-access-token': process.env.REACT_APP_API_KEY, 
        'Content-Type': 'application/json'
    }
  });
}
export default api;