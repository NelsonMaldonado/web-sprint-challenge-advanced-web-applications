import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

const initialState = {
  username: "",
  password: "",
}

const Login = (props) => {
  const [user, setUser] = useState(initialState)
  const [error, setError] = useState()

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }
  const login = (e) => {
    e.preventDefault()

    if (setUser.username !== "Lambda" || setUser.password !== "School") {
      setError("Username or Password is not valid")
    }
    axios
      .post("http://localhost:5000/api/login", user)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem("token", res.data.token)
        props.history.push("view", user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <ComponentContainer>
      <ModalContainer>
        <h1>Welcome to Blogger Pro</h1>
        <h2>Please enter your account information.</h2>
        <FormGroup onSubmit={login}>
          <Label>
            Username:
            <Input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
            />
          </Label>
          <Label>
            <Input
              type="password"
              name="password"
              placeholder="type password"
              id="password"
              onChange={handleChange}
            />
          </Label>
          <Button id="submit">Log in</Button>
        </FormGroup>
        <p id="error">{error}</p>
      </ModalContainer>
    </ComponentContainer>
  )
}

export default Login

//Task List
//1. Build login form DOM from scratch, making use of styled components if needed. Make sure the username input has id="username" and the password input as id="password".
//2. Add in a p tag with the id="error" under the login form for use in error display.
//3. Add in necessary local state to support login form and error display.
//4. When login form is submitted, make an http call to the login route. Save the auth token on a successful response and redirect to view page.
//5. If the response is not successful, display an error statement. **a server provided error message can be found in ```err.response.data```**
//6. MAKE SURE TO ADD id="username", id="password", id="error" AND id="submit" TO THE APPROPRIATE DOM ELEMENTS. YOUR AUTOTESTS WILL FAIL WITHOUT THEM.

const ComponentContainer = styled.div`
  height: 70%;
  justify-content: center;
  align-items: center;
  display: flex;
`

const ModalContainer = styled.div`
  width: 500px;
  background: white;
  padding: 2rem;
  text-align: center;
`

const Label = styled.label`
  display: block;
  text-align: left;
  font-size: 1.5rem;
`

const FormGroup = styled.form`
  padding: 1rem;
`

const Input = styled.input`
  font-size: 1rem;
  padding: 1rem 0;
  width: 100%;
`

const Button = styled.button`
  padding: 1rem;
  width: 100%;
`
