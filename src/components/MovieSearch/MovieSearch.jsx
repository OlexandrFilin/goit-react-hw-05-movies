import { useState, useEffect, useRef } from 'react';
import { InputSearch, FormSearch,ButtonSearch  } from './MovieSearch.styled';
import { querySearch } from '../../Api';
import ListMovies from 'components/ListMovies/ListMovies';
import { useLocation, useSearchParams } from 'react-router-dom';

const MovieSearch = () => {
// const MovieSearch = ({ strSearch }) => {  
  //const [query, setQuery] = useState(strSearch);
  const [searchParams, setSearchParams] = useSearchParams();
  const inpRef =useRef();

  let strQuweyDefault =searchParams.get('query');
  if(!strQuweyDefault){
    strQuweyDefault='';
  }else {
      
    }
  const [query, setQuery] = useState(strQuweyDefault);
  const [isList, setIsList] = useState([]);
   const location = useLocation();
   
   console.log('searchParams movi search', searchParams)
   console.log('locations movi search', location)
  useEffect(() => {
    // Тут виконуємо асинхронну операцію,
    // наприклад HTTP-запит за інформацією про фiльм
    if (!query) return;
    try {
      async function fetchMovie() {
        await querySearch(query).then(data => {
          setIsList(data.results);
        });
      }
      fetchMovie();
    } catch (error) {
      console.log('error', error);
    } finally {
    }
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();
    const strQuery = e.target.InpStrSearch.value;
    console.log('query', query)
    if(strQuery){
    
    
    setQuery(strQuery);
    setSearchParams({query:strQuery});
    };
   };

  return (
    <>
      <FormSearch  onSubmit={onSubmit}>
           <InputSearch
            type="text"
            name="InpStrSearch"
             placeholder="String of search"
             ref={inpRef}
          />
        <ButtonSearch type="submit">Search</ButtonSearch>
      </FormSearch>
      {isList && <ListMovies ArrMovies={isList} />}
    </>
  );
};
export default MovieSearch;
