import React, { useState,useEffect } from 'react'
//import axios
import axios from 'axios'

import {Link} from 'react-router-dom'

const url='https://jsonplaceholder.typicode.com/users';


 const Home =()=> {
     
    const [userdata, setuserdata] = useState([]);
     
      
     //Fetch APIDATA to loadinto Component..
const loadapidata= ()=>
{
     axios.get(url).then( (res)=>setuserdata(  res.data ) );
}

     //delete data 
  const deleteuserdata=async (id)=>
     {
          axios.delete(`${url}/${id}`)
         loadapidata();
     }
     //HTTP_RESTAPI_CALLS
useEffect( ()=>
{
    loadapidata()

},[])

     
     return (<>
        <div className="container py-2">
                        <h1>Customer Details</h1>
               
               
                <table className="table table-bordered table-striped table-light">

                    <thead className="thead-dark">
                        <tr>
                                
                                <th>Mobile Number</th>
                                <th>EMAIL</th>
                                <th>Address1</th>
                              
                                <th>Address2</th>
                        </tr>
                    </thead>

                    <tbody>
                    { 
                    userdata.map( (result, index)=>{ 
                        return(<tr key={index}>
                                <td>{ result.mobileNumber } </td>
                                <td>{ result.email} </td>
                                <td>{ result.details} </td>
                                
                                
                                
                            </tr>)
                    })
                }
                    </tbody>
                </table>


        </div>
    </>)
    
     
    
}
export default Home;