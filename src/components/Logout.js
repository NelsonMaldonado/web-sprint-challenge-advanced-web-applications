import React, { useEffect } from "react"
import axiosWithAuth from "../utils/axiosWithAuth"
const Logout = () => {
  useEffect(() => {
    axiosWithAuth()
      .post("/logout")
      .then((res) => {
        localStorage.removeItem("token")
        props.history.push("/login")
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return <div>You have logged out, please log back in</div>
}

export default Logout

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.
