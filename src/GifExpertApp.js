
import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GifExpertApp = () => {
    const [categorias, setCategorias] = useState(['Goku']);
    //console.log(categorias);
    return (
        <>
        <h2>GifExpertApp</h2>,
        <AddCategory setCategorias={setCategorias}/>
        <hr />
        <ol>
        {

            categorias.map(categoria=>(
                //li key={categoria}>{categoria}</li>
            
                <GifGrid
                    key={categoria} 
                    categoria = {categoria} 
                />
                )
            )
        }
        </ol>
        </>
    );
}
