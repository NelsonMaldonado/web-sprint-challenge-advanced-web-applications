import axios from "axios"

const axiosWithAuth = () => {
  const token = localStorage.getItem("token")

  return axios.create({
    baseURL: "http://localhost:5000/api",
    header: {
      authorization: token,
    },
  })
}

export default axiosWithAuth

//Task List:
//1. Complete axiosWithAuth
