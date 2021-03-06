import React, {useEffect} from 'react'
import {Link, useHistory} from "react-router-dom";
import UserRow from "./user-row";
import {connect} from "react-redux";
import userActions from "../../redux/actions/user-action";
import banner from "../../res/banner_teams.jpg";

const UserTable = ({user, seekers, findAllSavedCandidates}) => {
  console.log("saved seekers at table:", seekers)
  const history = useHistory()
  useEffect(() => {
    findAllSavedCandidates(user._id)
  }, [])
  return (
      <div className="container">
        <img src={banner} className="img-fluid" alt="signup_banner"/>
        <h1>
          My Saved Candidates List
        </h1>
        <div className="container dy-table">
          <table className="table">
            <tbody>
            <tr>
              <th className="d-none d-md-table-cell">Username</th>
              <th className="d-none d-lg-table-cell">Name</th>
              <th className="d-none d-lg-table-cell">Skills</th>
              <th></th>
            </tr>

            {
              seekers.map((seeker) =>
                  <UserRow user={user} seeker={seeker}/>
              )
            }
            </tbody>
          </table>
        </div>
        <div className="col-sm-6">
          <Link
              className="btn btn-outline-primary backHomeBtn" to="/">
            Homepage
          </Link>
        </div>
      </div>
  )

}

const stateToPropsMapper = (state) => {
  return {
    user: state.userReducer,
    seekers: state.savedCandidatesReducer
  }
}

const dispatchPropsMapper = (dispatch) => ({
  findAllSavedCandidates: (uid) => userActions.getSavedCandidatesForUser(dispatch, uid)
})

export default connect(stateToPropsMapper, dispatchPropsMapper)(UserTable)