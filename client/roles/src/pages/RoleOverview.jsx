/*import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSave, faTrash, faPencilAlt, faEllipsisV, faEdit, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link,useNavigate } from 'react-router-dom';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-1L5WErHrMyP7Yz/E6YCeNGaD53lK2wJWAiufnrqWJ6RuI6NBl6+JVW2rEauIxfKyyQNUXMeY5gFzGT96zFgGXg==" crossorigin="anonymous" />

function Roleslist() {
  const [data, setData] = useState([])

  useEffect(()=> {
        axios.get('http://localhost:3005/create')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    return (

      <div className="App">
        <div className="parts" style={{ marginLeft:'350px',marginRight:'250px', padding: "17px", paddingBottom: "100px", marginTop: "24px", borderRadius: 10, border: '3px solid #B5A28C' }}>
          <div id="subTopic" style={{ backgroundColor: '#B5A28C', marginBottom: "30px", height: '60px', width: '1657px', borderRadius: 15, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 className="subheaderTitle" style={{ fontSize: '30px', padding:'13px' }}>Roles</h4>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              
              <Link to ="/" className='createpage'><FontAwesomeIcon icon={faPlus} style={{ fontSize: '1.5rem', margin: '10px', cursor: 'pointer' }} /></Link>
              
              <FontAwesomeIcon icon={faSave} style={{ fontSize: '1.5rem', margin: '10px', cursor: 'pointer' }} />
              <FontAwesomeIcon icon={faPencilAlt} style={{ fontSize: '1.5rem', margin: '10px', cursor: 'pointer' }} />
              <FontAwesomeIcon icon={faTrash} style={{ fontSize: '1.5rem', margin: '10px', cursor: 'pointer' }} />
              
            </div>
          </div>
  
          <table className="table" width={"900px"} border={1} style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th></th>
                <th style={{ backgroundColor: '#B5A28C' ,fontSize: '24px'}}>Role name</th>
              </tr>
            </thead>
            <tbody>
                  { data.map((d, i) => (
                              <tr key={i}>
                                  <td>
                                  <input className="form-check-input" type="checkbox" name="view"
                                   style={{ width: '20px', height: '20px', border: '2px solid black' ,marginRight:'20px'}} />
                                  <Link to={'/2'} className="view-btn">
                                  <button className="view"><FontAwesomeIcon icon={faEllipsisV} style={{ fontSize: '1.5rem', margin: '3px', cursor: 'pointer' }} /></button>
                                  </Link>        
                                  
                                  </td>
                                  <td style={{fontSize:'21px'}}>{d.rolename}</td>
                              </tr>
                          ))
                      }
            </tbody>
          </table>
          <Link to="/" className="btn btn-primary ms-3" style={{ marginTop:'50px'}}>Back</Link>
        </div>
      </div>
    );
  }
  
  export default Roleslist; */