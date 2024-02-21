import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSave, faTrash, faPencilAlt, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from 'react-router-dom';

function Roleslist() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3005/create')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  // Filter data based on search term
  const filteredData = data.filter(d => d.rolename.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="App">
      <div className="parts" style={{ marginLeft:'350px',marginRight:'250px', padding: "17px", paddingBottom: "100px", marginTop: "24px", borderRadius: 10, border: '3px solid #B5A28C' }}>
        <div id="subTopic" style={{ backgroundColor: '#B5A28C', marginBottom: "30px", height: '60px', width: '1657px', borderRadius: 15, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h4 className="subheaderTitle" style={{ fontSize: '30px', padding:'13px' }}>Roles</h4>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/create" className='createpage'>
              <FontAwesomeIcon icon={faPlus} style={{ fontSize: '1.5rem', margin: '10px', cursor: 'pointer' }} />
            </Link>
            <FontAwesomeIcon icon={faSave} style={{ fontSize: '1.5rem', margin: '10px', cursor: 'pointer' }} />
            <FontAwesomeIcon icon={faPencilAlt} style={{ fontSize: '1.5rem', margin: '10px', cursor: 'pointer' }} />
            <FontAwesomeIcon icon={faTrash} style={{ fontSize: '1.5rem', margin: '10px', cursor: 'pointer' }} />
          </div>
        </div>
        
        {/* Search Bar */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="search" style={{ marginRight: '10px' }}>Role Name:</label>
          <input type="text" id="search" name="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        
        <table className="table" width={"900px"} border={1} style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th></th>
              <th style={{ backgroundColor: '#B5A28C' ,fontSize: '24px'}}>Role name</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((d, i) => (
              <tr key={i}>
                <td>
                  <input className="form-check-input" type="checkbox" name="view" style={{ width: '20px', height: '20px', border: '2px solid black' ,marginRight:'20px'}} />
                  <Link to={`/roles/${d.id}`} className="view-btn">
                    <button className="view">
                      <FontAwesomeIcon icon={faEllipsisV} style={{ fontSize: '1.5rem', margin: '3px', cursor: 'pointer' }} />
                    </button>
                  </Link>        
                </td>
                <td style={{fontSize:'21px'}}>{d.rolename}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/" className="btn btn-primary ms-3" style={{ marginTop:'50px'}}>Back</Link>
      </div>
    </div>
  );
}

export default Roleslist;

