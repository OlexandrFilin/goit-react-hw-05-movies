import HeaderHome from 'components/HeaderHome/HeaderHome';
import ListMovies from 'components/ListMovies/ListMovies';
import { queryTrending } from '../../queri';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [isList, setIsList] = useState([]);

//   console.log('isList-1', isList);
//   console.log('isList.length', isList.length);

  useEffect(() => {
    async function fetchData() {
      try {
        await queryTrending().then(data => {
          setIsList(data.results);
          // console.log('isList', isList)
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
