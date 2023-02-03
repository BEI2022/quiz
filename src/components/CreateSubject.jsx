import React, { useState} from 'react'
import { useParams } from 'react-router-dom'

const Create = () => {


  return (
    <>
      <h2>Add New Subject</h2>
      <form className="container ">
        <div >
          <label className="form-label">Subject Name</label> 
          <textarea rows="1" className="form-control" ></textarea>
        </div>
        <button className="btn btn-secondary mt-2" >Create</button>
      </form>
  </>
  )
}

export default Create
