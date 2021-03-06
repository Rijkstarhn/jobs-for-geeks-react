import userService from "../../services/user-service";

export const update = (dispatch, uid, user) => {
  userService.updateUser(uid, user)
  .then(status => {
          dispatch({
            type: "UPDATE",
            payload: {
              user
            }
          })
      }
  )
}
export const findAllUsers = (dispatch) => {
  userService.findAllUsers().then(users => {
    dispatch({
      type:"STORE_ALL_USERS",
      payload: {
        users
      }
    })
  })
}

export const deleteCandidate = (dispatch, uid, seeker) => {

    userService.deleteSeekerForRecruiter(uid, seeker).then(status => {
        console.log(status)
        dispatch({
                     type: "DELETE_CANDIDATE",
                     payload:{
                         userToDelete:seeker
                     }
                 })
    })
}

export const createCandidate = (dispatch, uid, seeker) => {
    // dispatch({
    //              type: "CREATE_USER",
    //              payload: {
    //                  user
    //              }
    //          })
    userService.createSeekerForRecruiter(uid, seeker).then(status => {
                                                    console.log(status)
                                                }
    )
}

export const updateCandidate = (dispatch, uid, seeker) => {
  // dispatch({
  //   type: "UPDATE_USER",
  //   payload:{
  //       userToUpdate:user
  //   }
  // })
    userService.updateSeekerForRecruiter(uid, seeker).then(status => {
        console.log(status)
    })
}

export const getSavedCandidatesForUser = (dispatch, uid) => {
    userService.findAllSeekersForRecruiter(uid).then((users) => dispatch({
                                                                       type:"STORE_SAVED_CANDIDATES",
                                                                       payload:{
                                                                           users
                                                                       }
                                                                   }))
}

const userActions = {
  update, findAllUsers, deleteCandidate, updateCandidate, createCandidate, getSavedCandidatesForUser

}
export default userActions