import React, { useEffect, useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { BlockUsers, FetchAllUsers, UnBlockUsers } from '../redux/slices/userSlice'
import { Spinner } from 'react-bootstrap'

const AdminManageUsers = () => {
  const dispatch=useDispatch()
  const[search,SetSearch]=useState("")
  const [roleFilter, setRoleFilter] = useState('all')

  const {userList,loading,error}=useSelector((state)=>state.user)
  useEffect(()=>{
    dispatch(FetchAllUsers({ search, role: roleFilter }))
  },[search,roleFilter])

  const handleBlockAndUnblockUsers=async(user)=>{
    if(user.isBlocked)
    {
      await dispatch(UnBlockUsers(user._id))
    }
    else{
      await dispatch(BlockUsers(user._id))
    }
    dispatch(FetchAllUsers({ search, role: roleFilter }))
  }
  
  return (
    <>
    <AdminSidebar title="Users"/>
    <div className="main-content">
     {/* ════ USERS PAGE ════ */}
      <div id="page-users" className="page p-4">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <h6 className="fw-bold mb-0">All Users</h6>
          <div className="d-flex gap-2">
            <input value={search} onChange={(e)=>SetSearch(e.target.value)} type="text" className="form-control form-control-sm bg-dark text-light border-secondary" placeholder="Search users..." style={{width: '200px'}} />
            <select value={roleFilter} onChange={(e)=>setRoleFilter(e.target.value)} className="form-select form-select-sm bg-dark text-light border-secondary" style={{width: 'auto'}}>
              <option value='all'>All Roles</option>
              <option value='customer'>Customer</option>
              <option value='restaurant_admin'>Restaurant Admin</option>
            </select>
          </div>
        </div>
        {
          loading?(
            <div className="text-center py-4">
              <Spinner animation='border' variant='secondary'/>
            </div>
          )
          :
          (
             <div className="card bg-dark border">
          <div className="table-responsive">
            <table className="table table-dark table-borderless align-middle mb-0">
              <thead className="border-bottom border-secondary">
                <tr className="text-secondary small">
                  <th>User</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {
                userList.length>0?(
                  userList.map((user,index)=>(
                      <tr key={user._id} className="border-bottom border-secondary border-opacity-25">
                        <td className="small fw-semibold">{user.name}</td>
                        <td className="small text-secondary">{user.email}</td>
                        <td><span className={user.role=='customer'?"badge bg-admin":"badge bg-warning text-dark"}>{user.role}</span></td>
                        <td>
                           <span className={user.isBlocked ? 'badge bg-danger' : 'badge bg-success'}>
                              {user.isBlocked ? 'Blocked' : 'Active'}
                            </span>
                        </td>
                        <td>
                           <button onClick={()=>handleBlockAndUnblockUsers(user)} className={`btn btn-sm ${user.isBlocked ? 'btn-success' : 'btn-danger'}`}>
                              {user.isBlocked ? 'Unblock' : 'Block'}
                            </button>
                        </td>
                      </tr>
                        
                  )) 
                )
                :
                (
                  <tr>
                    <td colSpan="5" className="text-center text-secondary py-4">
                      No Users found
                    </td>
                  </tr>
                )
              }
            </tbody>
            </table>
          </div>
        </div>
          )
        }
       
      </div>
    </div>

    </>
  )
}

export default AdminManageUsers