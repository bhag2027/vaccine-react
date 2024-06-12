import axios from 'axios'
import React, { useState } from 'react'

const SearchVacc = () => {
    const [data, changeData] = useState(

        {
            "name": ""


        }

    )

    const [result, changeresult] = useState([ ])


    // delete event handling
    const deletecourse=(id)=>{
        let input={"_id": id }
        axios.post("http://localhost:8080/delete",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("successfully deleted")
                    
                } else {
                    alert("error")
                    
                }
            }
        ).catch()
    }
// input value fetching
    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }
//  search button event
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search",data).then(
            (response)=>{
                changeresult(response.data)
            }
        ).catch()

    }

  return (
    <div>
                    <h1 align="center"><u>SEARCH </u></h1>
            <div className="container">


            </div>
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Search</button>
                            
                            <div className="row">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <table class="table">
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
                                      {result.map(
                                        (value,index)=>{
                                            return<tr>
                                                
                                                <td>{index+1}</td>
                                            <td>{value.name}</td>
                                            <td>{value.address}</td>
                                            <td>{value.gender}</td>
                                            <td>{value.bloodgroup}</td>
                                            <td>{value.category}</td>
                                            <td>{value.place}</td>
                                            <td> <button className="btn btn-danger" onClick={()=>{deletecourse(value._id)}}>Delete</button></td>
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
            </div>
    </div>
  )
}

export default SearchVacc