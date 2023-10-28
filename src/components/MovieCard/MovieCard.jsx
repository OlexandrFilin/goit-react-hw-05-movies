import GoBack from 'components/GoBack/GoBack';
import { queryCardMovie } from '../../queri';
import { useState, useEffect } from 'react';
//import { useParams } from "react-router-dom";

const MovieCard = () => {
  //const {movieId} = useParams();
  const movieId = 504949;
  //console.log('movieId', movieId)
  const [isPosterPass, setPosterPass] = useState('');
  const [isTitle, setTitle] = useState('');
  const [isReleaseDate, setReleaseDate] = useState('');
  const [isOverview, setOverview] = useState('');
  const [isGenres, setGenres] = useState([]);
  useEffect(() => {
    if (!isPosterPass) {
      async function fetchData() {
        try {
          await queryCardMovie(movieId).then(data => {
            setPosterPass(data.poster_path);
            setTitle(data.title);
            setReleaseDate(data.release_date);
            setOverview(data.overview);
            setGenres([data.genres[0],data.genres[1],]);

          //  console.log('data.genres[0]', isGenres)
          });
        } catch (error) {
          console.log('error', error);
        } finally {
        }
      }
      fetchData();
    }
  }, [isPosterPass, isGenres]);

  const getJar = str => {
    const date = new Date(str);
    return date.getUTCFullYear();
  };
  const getGenres = arr =>{
   return arr.join('')
  }

  return (
    <>
      <GoBack />
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${isPosterPass}`}
          alt="isCargMovie.title"
        />
        <div>
          <h2>{`${isTitle}  ${getJar(isReleaseDate)}`}</h2>
          <p>User score: 74%</p>
          <h3>Owerview</h3>
          <p>{isOverview}</p>
          <h3>{getGenres(isGenres)}</h3>
        </div>
      </div>
    </>
  );
};
export { MovieCard };
