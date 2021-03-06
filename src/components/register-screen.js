import React, {useState} from 'react';
import {Link} from "react-router-dom";
import userService from "../services/user-service";
import {LOGIN_STATE} from "../redux/storeConstants";
let editing = false;

const RegisterScreen = () => {
  // const [user, setUser] = useState(userInitial);
  // const [cachedItem, setCashedItem] = useState(user)

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [verifyPassword, setVerifyPassword] = useState("")
  const [role, setRole] = useState("JOB SEEKER")
  const [registerStatus, setRegisterStatus] = useState("")

  const handleSignUp = () => {
    editing = false;
    let registerInfo = {};
    registerInfo.username = userName;
    registerInfo.password = password;
    registerInfo.role = role;
    // console.log('cachedItem', registerInfo);
    // alert(registerInfo);
    userService.register(registerInfo)
        .then(response => {
          console.log("response", response)
          //alert('ffffff')
          // if(response) {
          //   setRegisterStatus("success")
          // }else{
          //   setRegisterStatus("fail")
          // }
        })

  }

  return (
      <div className="container">
        <h1 className="mb-3">
          <Link to="/">
            <i className="fas fa-home"/>
          </Link>
          Sign Up
        </h1>
        <form>
          <div className="form-group row mb-3">
            <label className="col-sm-2 col-form-label">
              Username
            </label>
            <div className="col-sm-6">
              <input className="form-control" id="usernameFld"
                     placeholder="Alice"
                     value={userName}
                     onChange={(e) => {
                       editing = true;
                       setUserName(e.target.value)
                     }}/>
            </div>
          </div>

          <div className="form-group row mb-3">
            <label className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-6">
              <input className="form-control" id="passwordFld"
                     placeholder="123qwe#$%" type="password"
                     value={password}
                     onChange={(e) => {
                       editing = true;
                       setPassword(e.target.value)
                     }}/>
            </div>
          </div>

          <div className="form-group row mb-3">
            <label className="col-sm-2 col-form-label">
              Verify Password
            </label>
            <div className="col-sm-6">
              <input className="form-control" id="verifyPasswordFld"
                     placeholder="123qwe#$%" type="password"
                     value={verifyPassword}
                     onChange={(e) => setVerifyPassword(e.target.value)}/>
              {verifyPassword.length > 0 && password !== verifyPassword && (
                  <div className="alert alert-danger">
                    password and verified password don't match
                  </div>
              )}
            </div>
          </div>


          <div className="form-group row mb-3">
            <label className="col-sm-2 col-form-label" htmlFor="role-select">
              Choose a role:
            </label>
            <div className="col-sm-6">
              <select className="form-control form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
              >
                <option value="JOB SEEKER">Job Seeker</option>
                <option value="RECRUITER">Recruiter</option>
              </select>
            </div>
          </div>


          <div className="form-group row mb-3">
            <button>Submit</button>
            <label className="col-sm-2 col-form-label">
            </label>
            <div className="col-sm-4">
              <button className="btn btn-primary btn-block"
                     onClick = {() => handleSignUp()}>
                Submit
              </button>
            </div>
          </div>
          {registerStatus === "fail" && !editing  && <div className="alert alert-danger">
            Username has already existed
          </div>}

          {registerStatus === "success" && !editing && <div className="alert alert-success">
            Register successfully! Please login
          </div>}

          <div className="form-group row mb-3">
            <label className="col-sm-1 col-form-label">
            </label>
            <div className="col-sm-6">
              <Link to="/login">
                Login
              </Link>
              <Link className="float-right" to="/">
                Cancel
              </Link>
            </div>
          </div>
        </form>

      </div>
  )
}

export default RegisterScreen;