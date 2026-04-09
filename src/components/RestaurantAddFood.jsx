import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategories, fetchAllCategoriesForRestAdmin } from '../redux/slices/categorySlice'

const RestaurantAddFood = () => {
  const dispatch=useDispatch()
  const{categoryList,loading,error}=useSelector((state)=>state.category)
    const [show, setShow] = useState(false)
   
    useEffect(()=>{
      dispatch(fetchAllCategoriesForRestAdmin())
    },[])

    console.log(categoryList);
    

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <> 
    <button
        onClick={handleShow}
        className="btn btn-sm px-3 py-2 fw-bold"
        style={{ backgroundColor: 'var(--admin)', color: '#fff', border: 'none' }}
      >
        <i className="bi bi-plus-lg me-1" /> Add Food
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          className="bg-dark text-white border-secondary"
          closeVariant="white"
        >
          <Modal.Title className="fw-bold fs-6">Add Food Item</Modal.Title>
        </Modal.Header>

        <Modal.Body className="bg-dark text-white">
          <Form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Food Name" />
              </div>
              <div className="col-md-6 mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter Price" />
              </div>
            </div>

            <div className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="Enter Description" />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select>
                  <option>Select Category</option>
                  {loading && <option disabled>Loading...</option>}
                 {error && <option disabled>Error loading categories</option>}
                  {categoryList.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="col-md-6 mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" />
              </div>
            </div>

            <div className="mb-3 form-check">
              <Form.Check type="checkbox" label="Available" defaultChecked />
            </div>
          </Form>
        </Modal.Body>

        <Modal.Footer className="bg-dark text-white">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default RestaurantAddFood