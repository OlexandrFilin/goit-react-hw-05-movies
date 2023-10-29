import { useState, useEffect } from 'react';
import { InputSearch, FormSearch,ButtonSearch  } from './MovieSearch.styled';
import { querySearch } from '../../Api';
import ListMovies from 'components/ListMovies/ListMovies';

const MovieSearch = ({ strSearch }) => {
  const [query, setQuery] = useState(strSearch);
  const [isList, setIsList] = useState([]);
  
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
    strSearch = e.target.InpStrSearch.value;
    setQuery(strSearch);
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
