import React, { useState } from 'react';
import PropTypes from "prop-types";

const AddCategory = ({setCategorias}) => {
    //const [categorias, setCategorias] = useState(categorias);
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategorias(cats=>[inputValue,...cats]);
            setInputValue('');
        }
        
        //console.log(setCategorias);
        //return setCategorias;
    }
  return (
    <form onSubmit={handleSubmit}>
        <h1>AddCategory</h1>
        <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}
        />
    </form>
  )
}
AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

AddCategory.defaultProps = {
    setCategorias: ['Goku',],
}
export default AddCategory;
