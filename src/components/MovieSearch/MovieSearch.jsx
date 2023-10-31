import { useState, useEffect } from 'react';
import { InputSearch, FormSearch, ButtonSearch } from './MovieSearch.styled';
import { querySearch } from '../../Api';
import ListMovies from 'components/ListMovies/ListMovies';
import { useSearchParams } from 'react-router-dom';
import { spinerGo } from '../Loader/Loader';
const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  //получаем с searchParams параметра query(строка поиска) а елси undefound - пустая строка
  const query = searchParams.get('query') ?? '';
const [isQuery, setQuery] = useState(query);
  const [isList, setIsList] = useState([]);
  const [isSpiner, setSpiner] = useState(false);
  //для пробрасывания текущего состояния location во вложенные компоненты
  //let srtingSearch='';
  useEffect(() => {
    // Тут виконуємо асинхронну операцію,
    // наприклад HTTP-запит за інформацією про фiльм
    if (!isQuery) return;

    try {
      setSpiner(true);
      async function fetchMovie() {
        await querySearch(isQuery).then(data => {
          setIsList(data.results);
        });
      }
      fetchMovie();
    } catch (error) {
      console.log('error', error);
    } finally {
      setSpiner(false);
    }
  }, [isQuery]);

  const onSubmit = e => {
    e.preventDefault();
    const strQuery = e.target.InpStrSearch.value;
    if (strQuery) {
     // setSearchParams({ query: strQuery });
     setQuery(strQuery);
    }
  };
  // для контрольованого вводу параметра використовуємо хук useSearchParams а не  state компонента
  const handleChangeParam = e => {
    e.target.value
      ? setSearchParams({ query: e.target.value })
      : setSearchParams({});

  //   console.log('e.target.value', e.target.value)
  // srtingSearch=   e.target.value;
      
  };

  return (
    <>
      <FormSearch onSubmit={onSubmit}>
        <InputSearch
          type="text"
          name="InpStrSearch"
          placeholder="String of search"
          value={query}
          onChange={handleChangeParam}
        />
        <ButtonSearch type="submit">Search</ButtonSearch>
      </FormSearch>
      {spinerGo(isSpiner)}
      {isList && <ListMovies ArrMovies={isList} />}
    </>
  );
};
export default MovieSearch;
