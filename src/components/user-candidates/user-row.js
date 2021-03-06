import React from 'react'
import {Link} from "react-router-dom";
import userActions from "../../redux/actions/user-action";
import {connect} from "react-redux";

const UserRow = (
    {
        user, seeker,
        deleteUser,
    }) => {

    // const [editing, setEditing] = useState(false)
    // const [newNote, setNewNote] = useState(user.notes)
    console.log("saved seekers at each row:", seeker)
    console.log("saved user at each row:", user)

    // const handleUpdate = () => {
    //   let newUser = {
    //     ...user,
    //     note: newNote
    //   }
    //   updateUser(newUser)
    // }

    return (
        <tr>
            <td>
                <Link to={
                    {
                        pathname: `/profile/${seeker._id}`,
                        state: {seeker}
                    }
                }>{seeker.username}</Link>
            </td>

            <td>
                {seeker.firstname} {seeker.lastname}
            </td>
            <td>
                {seeker.skills}
            </td>
            <td>
                <i className="fas fa-times float-right fa-2x"
                   onClick={() => {
                       deleteUser(user._id, seeker)
                   }
                   }/>
            </td>
            {/*<td className="d-none d-lg-table-cell">         {*/}
            {/*  !editing && (*/}
            {/*      <>*/}
            {/*        {user.notes}*/}
            {/*      </>*/}
            {/*  )*/}

            {/*}*/}
            {/*  {*/}
            {/*    editing &&           <select className="form-select" aria-label="Default select example"*/}
            {/*                                 value={user.notes}*/}
            {/*                                 onChange={(e) => setNewNote(e.target.value)}>*/}
            {/*      <option value="interested">Interested</option>*/}
            {/*      <option value="contacted">Contacted</option>*/}
            {/*    </select>*/}
            {/*  }*/}
            {/*</td>*/}

            {/*<td>*/}
            {/*  {editing && <i className="fas fa-times float-right fa-2x"*/}
            {/*                 onClick={() => {*/}
            {/*                   setEditing(false)*/}
            {/*                   deleteUser(user._id, seeker)*/}
            {/*                     updateUser(user._id, seeker)*/}
            {/*                 }*/}
            {/*                 }></i>}*/}
            {/*    {editing && <i className="fas fa-check float-right fa-2x"*/}
            {/*                   // onClick={() => handleUpdate()}*/}
            {/*                   onClick={() => updateUser(user._id, seeker)}*/}
            {/*    />}*/}
            {/*  {!editing && <i className="fas fa-edit float-right fa-2x"*/}
            {/*                  onClick={() => {*/}
            {/*                    setEditing(true)*/}
            {/*                  }}></i>}*/}
            {/*</td>*/}
        </tr>)
}

const stateToPropsMapper = (state) => {
    return {
        user: state.userReducer
    }
}

const dispatchPropsMapper = (dispatch) => ({
    deleteUser: (uid, seeker) => userActions.deleteCandidate(dispatch, uid, seeker),
    updateUser: (uid, seeker) => userActions.updateCandidate(dispatch, uid, seeker)
})

export default connect(stateToPropsMapper, dispatchPropsMapper)(UserRow)
