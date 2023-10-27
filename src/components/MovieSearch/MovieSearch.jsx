//import { useState } from "react";
import { LabelSearch, InputSearch } from "./MovieSearch.styled";

const MovieSearch = ({SrtSearch})=>{
   // const [strSearch,setStrSearch]= useState('');
   
    const onSubmit =(e)=>{
        e.preventDefault(); 
            //   console.log('form', e.target.InpStrSearch.value); 
        SrtSearch = e.target.InpStrSearch.value;  
    }

    return (
        <>
      <form  onSubmit={onSubmit}>
        <LabelSearch className=''>
      Search
      <InputSearch
        type="text"
        name="InpStrSearch"
        //value={value}
        // className={css.inpfiltr}
        // onChange={onChange}
        placeholder="String of search"
      />
    </LabelSearch>
    <button type="submit">Search</button>
    </form>
       </>
    )
}
export default MovieSearch ;