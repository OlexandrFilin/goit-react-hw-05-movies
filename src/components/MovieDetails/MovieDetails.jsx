//import GoBack from 'components/GoBack/GoBack';
import { queryCardMovie } from '../../Api';
import { useState, useEffect,useRef } from 'react';
import { ContainerAboutMovie } from './MovieCard.styled';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MovieCard = () => {

  const { movieId } = useParams();
  const [isPosterPass, setPosterPass] = useState('');
  const [isTitle, setTitle] = useState('');
  const [isPopularity, setPopularity] = useState(0);
  const [isReleaseDate, setReleaseDate] = useState('');
  const [isOverview, setOverview] = useState('');
  const [isGenres, setGenres] = useState([]);
  const location =useLocation();

  const linkLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!isPosterPass) {
      async function fetchData() {
        try {
          await queryCardMovie(movieId).then(data => {
            setPosterPass(data.poster_path);
            setTitle(data.title);
            setReleaseDate(data.release_date);
            setOverview(data.overview);
            setPopularity(data.popularity);
            setGenres([...data.genres]);
          });
        } catch (error) {
          console.log('error', error);
        } finally {
        }
      }
      fetchData();
    }
  }, [isPosterPass, isGenres, movieId]);

  const getJar = str => {
    const date = new Date(str);
    return date.getUTCFullYear();
  };

  const getGenres = arr => {
    return arr.reduce((str, item) => {
      const nameGenres = item?.name;
      if (!nameGenres) {
        return str;
      }
      return str + ' ' + nameGenres;
    }, '');
  };
  console.log('location Movie card', location)
  const defaultImg = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>'
  return (
    <>
        <Link to={linkLocation.current}>Go back</Link>
      <ContainerAboutMovie>
        <img
          src={ isPosterPass ?`https://image.tmdb.org/t/p/w500${isPosterPass}`:defaultImg}
          alt="isCargMovie.title"
        />
        <div>
          <h2>{`${isTitle}  ${getJar(isReleaseDate)}`}</h2>
          <p>{`User score: ${Math.ceil(isPopularity)}%`}</p>
          <h3>Owerview</h3>
          <p>{isOverview}</p>
          <h3>Genres</h3>
          <p>{getGenres(isGenres)}</p>
        </div>
      </ContainerAboutMovie>
      <ul>
        <li>
          <Link to={'cast'}> Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}> Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default MovieCard  ;
