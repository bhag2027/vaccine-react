import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddVaccine = () => {

    const[data,changeData]=useState(
        [{
    
            "name":"",
            "dob":"",
            "gender":"",
            "mob":"",
            "address":"",
            "bloodgroup":"",
            "category":"",
            "place":"",
            "email":"",
            "username":"",
            "password":"",
            "confirmpassword":""
          }]
      )
      const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
      }
      const readValue=()=>{
        console.log(data)
        if(data.password==data.confirmpassword){
        axios.post("http://localhost:8080/",data).then(
          (response)=>{
            console.log(response.data)
            if (response.data.status=="success") 
              {
                alert("successfull")
              
            } else {
              alert("error")
              
            }
          }
        )}else{
          alert("incorrect password")
        }
      }
  return (
    <div>
        
      <h1 align="center"><u>REGISTRATION</u></h1>
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Name</label>
                  <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Dob</label>
                  <input type="date" className="form-control"  name='dob' value={data.dob} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Bloodgroup</label>
                <select  className="form-control"  name='bloodgroup' value={data.bloodgroup} onChange={inputHandler}>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B-">B-</option>
                  <option value="B+">B+</option>
                  <option value="O-">O-</option>
                  <option value="O+">O+</option>
                  <option value="AB-">AB-</option>
                  <option value="AB+">AB+</option>
                </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Mob</label>
                <input type="text" className="form-control"  name='mob' value={data.mob} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Address</label>
                <textarea className="form-control"  name='address' value={data.address} onChange={inputHandler}></textarea>
                </div>
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">District</label>
                <select  className="form-control"  name='category' value={data.category} onChange={inputHandler}>
                  <option value="Covaxin">Covaxin</option>
                  <option value="Covishield">Covishield</option>
                  
                </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Place</label>
                <input type="text" className="form-control"  name='place' value={data.place} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Email</label>
                <input type="text" className="form-control"  name='email' value={data.email} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Username</label>
                <input type="text" className="form-control"  name='username' value={data.username} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Confirmpassword </label>
                <input type="password"  className="form-control"  name='confirmpassword' value={data.confirmpassword} onChange={inputHandler}  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <button className="btn btn-success" onClick={readValue}>Submit</button>
                </div>
                <p>Back to login page <Link to="/login">Back</Link></p>
              </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default AddVaccine