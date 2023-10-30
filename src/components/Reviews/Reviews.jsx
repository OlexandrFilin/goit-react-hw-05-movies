import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { reviews } from '../../Api';
import { spinerGo } from '../Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [isPreviev, setReviews] = useState([]);
  const [isSpiner, setSpiner] = useState(true);
  useEffect(() => {
    if (isPreviev.length === 0) {
      setSpiner(true);
      async function fetchData() {
        try {
          await reviews(movieId).then(data => {
            setReviews(data.results);
          });
        } catch (error) {
          console.log('error', error);
        } finally {
          setSpiner(false);
        }
      }
      fetchData();
    }
  }, [movieId, isPreviev.length]);

  const mapReviews = arrReview => {
   

    if (arrReview.length === 0) {
      return <h3>We don't have any reviews for this movienpm </h3>;
    } else {
      return  arrReview.map(review => {
        return (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        );
      });

  
    }
  };

  return (
  <>
{spinerGo(isSpiner)}
  <ul>{mapReviews(isPreviev)}</ul>;
  </>)
};
export default Reviews;
