//import GoBack from 'components/GoBack/GoBack';
import { BiArrowBack } from 'react-icons/bi';
import { queryCardMovie } from '../../Api';
import { useState, useEffect, useRef } from 'react';
import {
  ContainerAboutMovie,
  GoBackStyl,
  ListNavAddInfo,
} from './MovieCard.styled';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { spinerGo } from '../Loader/Loader';

const MovieCard = () => {
  const { movieId } = useParams();
  const [isPosterPass, setPosterPass] = useState('');
  const [isTitle, setTitle] = useState('');
  const [isPopularity, setPopularity] = useState(0);
  const [isReleaseDate, setReleaseDate] = useState('');
  const [isOverview, setOverview] = useState('');
  const [isGenres, setGenres] = useState([]);
  const [isSpiner, setSpiner] = useState(true);

  const location = useLocation();

  const BackLocationRef = useRef(location.state?.from);
  useEffect(() => {
    if (!isPosterPass) {
      setSpiner(true);
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
          setSpiner(false);
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

  

  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';
  return (
    <>
      <GoBackStyl to={BackLocationRef.current}>
        <BiArrowBack />
        Go back
      </GoBackStyl>
      {spinerGo(isSpiner)}
      <ContainerAboutMovie>
        <img
          src={
            isPosterPass
              ? `https://image.tmdb.org/t/p/w500${isPosterPass}`
              : defaultImg
          }
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

      <ListNavAddInfo>
        <li>
          <Link to={'cast'}> Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}> Reviews</Link>
        </li>
      </ListNavAddInfo>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieCard;
