import { useState, useEffect } from 'react';
import { InputSearch, FormSearch,ButtonSearch  } from './MovieSearch.styled';
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
    if (!query) return;
    try {
      async function fetchMovie() {
        await querySearch(query).then(data => {
          console.log('ata.result', data.results);

          //const result ={...data.results};
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
    strSearch = e.target.InpStrSearch.value;
    setQuery(strSearch);
    // setStrSearch(strSearch);
    //setSearchParams({ query: strSearch   })
    //console.log('searchParams.get("guery")', searchParams.get('query'));
    // e.target.reset();
  };

  return (
    <>
      <FormSearch  onSubmit={onSubmit}>
        
          <InputSearch
            type="text"
            name="InpStrSearch"
             placeholder="String of search"
          />
       
        <ButtonSearch type="submit">Search</ButtonSearch>
      </FormSearch>
      {isList && <ListMovies ArrMovies={isList} />}
    </>
  );
};
export default MovieSearch;
