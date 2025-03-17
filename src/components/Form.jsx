import {useState, useEffect} from 'react'
import './Form.css'
// import Carousel from './Carousel'

function Form(props){
    const[formData,setFormData] = useState({searchterm:""});

    const handleChange=(e)=> {
        setFormData({...formData, [e.target.name]:e.target.value});
    };
    const handleSubmit= (e)=> {
        e.preventDefault();
        props.BookSearch(formData.searchterm)
    }
return(
    <div classname="form-container">
        <h1 className="heading">Welcome to Sree's BookHive</h1>
        <form className= "form" onSubmit={handleSubmit}>
            <input className="searchbar"
                type="text"
                name="searchterm"
                onChange={handleChange}
                value= {formData.searchterm}
                placeholder='Search by Title,Author'
            />
            <input className="btn"
                type="submit"
                value='Search'/>
            
        </form>

     
    </div>
)

} export default Form