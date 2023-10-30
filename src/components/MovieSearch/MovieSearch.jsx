import { useState, useEffect} from 'react';
import { InputSearch, FormSearch,ButtonSearch  } from './MovieSearch.styled';
import { querySearch } from '../../Api';
import ListMovies from 'components/ListMovies/ListMovies';
import {  useSearchParams } from 'react-router-dom';

const MovieSearch = () => {
const [searchParams, setSearchParams] = useSearchParams();
//получаем с searchParams параметра query(строка поиска) а елси undefound - пустая строка
const query =searchParams.get('query') ?? '';
 
  const [isList, setIsList] = useState([]);
   //для пробрасывания текущего состояния location во вложенные компоненты
  
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
      if(strQuery){
    
    setSearchParams({query:strQuery});
    };
   };
// для контрольованого вводу параметра використовуємо хук useSearchParams а не  state компонента
   const handleChangeParam =(e)=>{
    e.target.value ? setSearchParams({query: e.target.value}) :setSearchParams({});
   }
  return (
    <>
      <FormSearch  onSubmit={onSubmit}>
           <InputSearch
            type="text"
            name="InpStrSearch"
             placeholder="String of search"
              value ={query}
             onChange={handleChangeParam}
          />
        <ButtonSearch type="submit">Search</ButtonSearch>
      </FormSearch>
      {isList && <ListMovies ArrMovies={isList} />}
    </>
  );
};
export default MovieSearch;
