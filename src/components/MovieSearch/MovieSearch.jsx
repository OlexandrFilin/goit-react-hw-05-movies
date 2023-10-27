import { LabelSearch, InputSearch } from "./MovieSearch.styled";

const MovieSearch = ()=>{
    return (
        <>
      
        <LabelSearch className=''>
      Search
      <InputSearch
        type="text"
        name="search"
       // value={filter}
        // className={css.inpfiltr}
        // onChange={onChange}
        placeholder="String of search"
      />
    </LabelSearch>
       </>
    )
}
export default MovieSearch ;