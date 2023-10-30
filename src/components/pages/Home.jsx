import HeaderHome from 'components/HeaderHome/HeaderHome';
import ListMovies from 'components/ListMovies/ListMovies';
import { queryTrending } from '../../Api';
import { useEffect, useState } from 'react';
//import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const [isList, setIsList] = useState([]);
  // const location=useLocation();
  // console.log('location Home :>> ', location);
  useEffect(() => {
    async function fetchData() {
      try {
        await queryTrending().then(data => {
          setIsList(data.results);
         });
      } catch (error) {
        console.log('error', error);
      } finally {
      }
    }
    
    fetchData();
  }, []);

  return (
    <>
      <HeaderHome />
      <ListMovies ArrMovies={isList} />
    </>
  );
};

export default HomePage;
