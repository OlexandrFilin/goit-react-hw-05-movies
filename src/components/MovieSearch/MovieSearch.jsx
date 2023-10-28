import { useState, useEffect } from 'react';
import { LabelSearch, InputSearch } from './MovieSearch.styled';
//import { useSearchParams } from 'react-router-dom';
import { querySearch } from '../../queri';
import ListMovies from 'components/ListMovies/ListMovies';


const MovieSearch = ({ strSearch }) => {
  const [query, setQuery] = useState(strSearch);
  const [isList, setIsList] = useState([]);
  //const [respon, setRespon] = useState({});
  //   const [searchParams, setSearchParams] = useSearchParams();
  //const strSearch = searchParams.get("query");

  useEffect(() => {
    // Тут виконуємо асинхронну операцію,
    // наприклад HTTP-запит за інформацією про фльм
    if (query === '') return;

    async function fetchMovie() {
      await querySearch(query).then(data => {
       console.log('ata.result', data.results);
       const result ={...data.results};
       setIsList(data.results);
      });

      // setQuery(query);
    }

    fetchMovie();
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();
    strSearch = e.target.InpStrSearch.value;
    setQuery(strSearch);
    // setStrSearch(strSearch);
    //setSearchParams({ query: strSearch   })
    //console.log('searchParams.get("guery")', searchParams.get('query'));
   // e.target.reset();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <LabelSearch className="">
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
      {isList&&<ListMovies ArrMovies={isList} />}
      


    </>
  );
};
export default MovieSearch;
