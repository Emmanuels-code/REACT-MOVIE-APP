import {React, useState, useEffect} from 'react'
import './Form.css';// Import your CSS file

function form({MovieSearch}) {

    const [formData, setFormData] = useState({
        search: ""
    });

    const handleChange = (evt) => {

        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
        });
        };
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        MovieSearch(formData.searchTerm)


  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" name="searchTerm"
        className="searchbar"
        value={formData.searchTerm}
         onChange={handleChange}/>

        <input type="submit" className="submitBtn" />
        
    </form>
    
    </>
  )
}

export default form