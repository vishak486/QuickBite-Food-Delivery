import React, { useEffect } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'
import { fetchAllCategories } from '../redux/slices/categorySlice'

const AdminManageCategories = () => {
    const dispatch=useDispatch()
    const{categoryList,loading,error}=useSelector((state)=>state.category)
console.log(categoryList);
useEffect(()=>{
    dispatch(fetchAllCategories())
},[])

  return (
    <>
    <AdminSidebar title="Categories" />

      <div className="main-content">
        <div className="p-4">

          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <div>
              <h6 className="fw-bold mb-0">Manage Categories</h6>
              <small className="text-secondary">Add and manage food categories</small>
            </div>
            <button
              className="btn btn-sm px-3 py-2 fw-bold"
              style={{ backgroundColor: 'var(--admin)', color: '#fff', border: 'none' }}
            >
              <i className="bi bi-plus-lg me-1" /> Add Category
            </button>
          </div>

          {/* Table */}
          {
            loading?(
                <div className="text-center">
                    <Spinner animation='border' variant='secondary'/>
                </div>
            )
            :(
         <div className="card bg-dark border">
            <div className="table-responsive">
              <table className="table table-dark table-borderless align-middle mb-0">
                <thead className="border-bottom border-secondary">
                  <tr className="text-secondary small">
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        categoryList?.map((category,index)=>(
                        <tr key={category._id} className="border-bottom border-secondary border-opacity-25">
                            <td className="small text-secondary">{index+1}</td>
                            <td className="small fw-semibold">{category.name}</td>
                            <td className="small text-secondary">{category.description}</td>
                            <td>
                            <select className="form-select form-select-sm bg-dark text-light border-secondary" style={{ width: 'auto' }}>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                            </td>
                            <td>
                            <div className="d-flex gap-2">
                                <button className="btn btn-outline-secondary btn-sm"><i className="bi bi-pencil" /></button>
                                <button className="btn btn-danger btn-sm"><i className="bi bi-trash" /></button>
                            </div>
                            </td>
                        </tr>
                        ))
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

export default AdminManageCategories