import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategories, fetchAllCategoriesForRestAdmin } from '../redux/slices/categorySlice'
import { addFood, fetchAllFoods, fetchEachFoodsCreatedByEachRestaurant } from '../redux/slices/foodSlice'

const RestaurantAddFood = () => {
  const dispatch=useDispatch()
  const{categoryList,loading,error}=useSelector((state)=>state.category)
  const [show, setShow] = useState(false)
  const [foodData,setFoodData]=useState({
    name:"",description:"",price:"",categoryID:"",image:"",type:"foods"
  })
   
  useEffect(()=>{
    dispatch(fetchAllCategoriesForRestAdmin())
  },[])
    

  const handleClose = () => {
    setShow(false)
    setFoodData({
      name:"",description:"",price:"",categoryID:"",image:"",type:"foods"
    })
  }
  const handleShow = () => setShow(true)

  const handleSubmit=(e)=>{
    e.preventDefault()
    const {name,description,price,categoryID,image}=foodData
    if(!name || !description || !price || !categoryID || !image )
    {
      alert("please fill the form")
    }
    else
    {
      const formData=new FormData()
      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("categoryId",categoryID)
      formData.append("type", foodData.type)
      formData.append("image",image)

      dispatch(addFood(formData)).then(()=>{
        dispatch(fetchEachFoodsCreatedByEachRestaurant(""))
      })
      handleClose()
    }
  }

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
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control value={foodData.name} onChange={e=>setFoodData({...foodData,name:e.target.value})} type="text" placeholder="Enter Food Name" required />
              </div>
              <div className="col-md-6 mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control value={foodData.price} onChange={e=>setFoodData({...foodData,price:e.target.value})} type="number" placeholder="Enter Price" required />
              </div>
            </div>

            <div className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control value={foodData.description} onChange={e=>setFoodData({...foodData,description:e.target.value})} as="textarea" rows={2} placeholder="Enter Description" />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select value={foodData.categoryID} onChange={e=>setFoodData({...foodData,categoryID:e.target.value})}>
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
                <Form.Control  onChange={e=>setFoodData({...foodData,image:e.target.files[0]})} type="file" />
              </div>
            </div>
            
            <Modal.Footer className="bg-dark text-white">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' variant="primary">
            Save
          </Button>
        </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default RestaurantAddFood