import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { reviews } from '../../Api';
const Reviews = () => {
  const { movieId } = useParams();
  const [isPreviev, setReviews] = useState([]);
  useEffect(() => {
    if (isPreviev.length === 0) {
      async function fetchData() {
        try {
          await reviews(movieId).then(data => {
            setReviews(data.results);
          });
        } catch (error) {
          console.log('error', error);
        } finally {
        }
      }
      fetchData();
    }
  }, [movieId, isPreviev.length]);

  const mapReviews = arrReview => {
    // console.log('arrReview :>> ', arrReview);

    if (arrReview.length === 0) {
      return <h3>We don't have any reviews for this movienpm </h3>;
    } else {
      return arrReview.map(review => {
        return (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        );
      });
    }
  };
  return <ul>{mapReviews(isPreviev)}</ul>;
};
export default Reviews;
