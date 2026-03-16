import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { EditCategories, fetchAllCategories } from '../redux/slices/categorySlice';

const AdminEditCategories = ({category}) => {
     const [show, setShow] = useState(false);
      const [error, setError] = useState('')
      const [successMsg, setSuccessMsg] = useState('')
      const dispatch=useDispatch()
      const [formdata,setFormdata]=useState({
        name:category.name,description:category.description
      })
    const handleClose = () => {
        setShow(false);
        setFormdata({ name:"",description:""})
        setError('')
        setSuccessMsg('')
    }
    const handleShow = () => setShow(true);
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const {name,description}=formdata
        if(!name || !description)
        {
            setError('Please fill the fields')
            return
        }
        setError('')
        const result=await dispatch(EditCategories({formdata:formdata,id:category._id}))
        console.log('edit result:', result.payload)
        if(EditCategories.fulfilled.match(result))
        {
            setSuccessMsg(result.payload)
            dispatch(fetchAllCategories())
            setTimeout(() => {
               setShow(false)               // ← only close modal, don't call handleClose
      setSuccessMsg('')            // ← clear after closing
      setFormdata({ name: '', description: '' })
            }, 1500)

        }
    }
  return (
    <>
      <button onClick={handleShow} className="btn btn-outline-secondary btn-sm"><i className="bi bi-pencil" /></button>

        <Modal  show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="bg-dark text-white border-secondary" closeVariant="white">
          <Modal.Title className="fw-bold fs-6">Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
             {error && (
                <div className="alert alert-danger text-white py-2 small">{error}</div>
            )}
            {successMsg && (
                <div className="alert alert-success text-white py-2 small">{successMsg}</div>
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
          <Button variant="primary"  onClick={handleSubmit}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AdminEditCategories