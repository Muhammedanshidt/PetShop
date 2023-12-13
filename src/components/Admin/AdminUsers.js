import React from 'react'
import { myContext } from '../../App'
import { useContext } from 'react'
import AdminHome from './AdminHome'

function AdminUsers() {

// const [users, setUsers] = useState([])
const {allUser} = useContext (myContext)
console.log(allUser);
  return (
    <div>
      <AdminHome/>
      <div>ADMIN USER</div>
      <div className='containerflued' style={{display:"flex", justifyContent:"center"}}>
      <table style={{border:"solid black",width:"800px",backgroundColor:'Highlight',color:"white"}}>
      <thead>
        <tr>
          <th colSpan="2" style={{border:'solid black'}}>NO</th>
          <th colSpan="3" style={{border:'solid black'}}>USERNAME</th>
          <th colSpan="4" style={{border:'solid black'}}>EMAIL</th>
          <th colSpan="3" style={{border:'solid black'}}>PASSWORD</th>
        </tr>
      </thead>
      <tbody>
      {
        allUser.map((user,index) => {
          const {username,email,password} = user
      return(
        <tr style={{border:'solid black'}}>
          <td colSpan="2" >{index+1}</td>
          <td colSpan="3" >{username}</td>
          <td colSpan="4"> {email}</td>
          <td colSpan="3" >{password}</td>
        </tr>

      )
        })
      }
       </tbody>
       </table>
       </div>
    </div>
  )
}

export default AdminUsers
