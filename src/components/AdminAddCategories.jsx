import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AddCategories, fetchAllCategories } from '../redux/slices/categorySlice';

const AdminAddCategories = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState('')
  const dispatch=useDispatch()
  const [formdata,setFormdata]=useState({
    name:"",description:""
  })

  const handleClose = () => {
    setShow(false);
    setFormdata({ name:"",description:""})
    setError('')
  }
  const handleShow = () => setShow(true);

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const {name,description}=formdata
    if(!name && !description)
    {
    setError('Please fill all fields')
    return
    }
    setError('')
    const result = await dispatch(AddCategories(formdata))
    if (AddCategories.fulfilled.match(result)) {
        dispatch(fetchAllCategories())  // ← refetch full list after adding
    }
    handleClose()

  }
  return (
    <>
      <button
        onClick={handleShow}
        className="btn btn-sm px-3 py-2 fw-bold"
        style={{ backgroundColor: 'var(--admin)', color: '#fff', border: 'none' }}
    >
        <i className="bi bi-plus-lg me-1" /> Add Category
    </button>

      <Modal  show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="bg-dark text-white border-secondary" closeVariant="white">
          <Modal.Title className="fw-bold fs-6">Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
             {error && (
                <div className="alert alert-danger py-2 small">{error}</div>
            )}
            <Form>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={formdata.name} onChange={e=>setFormdata({...formdata,name:e.target.value})} type='text' placeholder='Enter Category'/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={formdata.description} onChange={e=>setFormdata({...formdata,description:e.target.value})} type='text' placeholder='Enter Description'/>
                    </div>
                </div>
            </Form>
        </Modal.Body>
        <Modal.Footer className="bg-dark text-white">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit }>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AdminAddCategories