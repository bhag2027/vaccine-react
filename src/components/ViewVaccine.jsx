import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const ViewVaccine = () => {

    
        const [data,changeData]=useState([])
        const fetchData=()=>{
            axios.post("http://localhost:8080/view").then(
                (response)=>{
                    changeData(response.data)
                }
            ).catch().finally()
        }
        useEffect(()=>{fetchData()},[])
  return (
    <div>
        <NavBar/>
        <h1 align="center"><u>VIEW DETAILS</u></h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table table-success table-striped">
                                
                                    <thead>
                                        <tr>
                                            <th scope="col">SNO</th>
                                            <th scope="col">NAME</th>
                                            <th scope="col">ADDRESS</th>
                                            <th scope="col">GENDER</th>
                                            <th scope="col">BLOODGROUP</th>
                                            <th scope="col">CATEGORY</th>
                                            <th scope="col">PLACE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {data.map(
                                        (value,index)=>{
                                            return <tr>
                                            
                                            <td>{index+1}</td>
                                            <td>{value.name}</td>
                                            <td>{value.address}</td>
                                            <td>{value.gender}</td>
                                            <td>{value.bloodgroup}</td>
                                            <td>{value.category}</td>
                                            <td>{value.place}</td>
                                        </tr>
                                        }
                                       )}
                                        
                                    </tbody>
                                </table>

                           
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ViewVaccine