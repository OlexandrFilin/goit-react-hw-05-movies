import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {reviews} from '../../Api';
const Reviews = ()=>{
    const params =useParams();
    const [isPreviev, setReviews]=useState([]);
       useEffect(() => {
        
       if (isPreviev.length === 0) {
          async function fetchData() {
            try {
              await reviews(params.movieId).then(data => {
                setReviews(data.results);
               console.log('data.results', data.results)
                });
            } catch (error) {
              console.log('error', error);
            } finally {
            }
          }
          fetchData();
     }
      }, [params.movieId, isPreviev.length ]);

      const mapReviews =(arrReview)=>{
        return arrReview.map((review)=>{
           return (<li key={review.id}>  
           <h3>{review.author}</h3>
           <p>{review.content}</p>
           
            </li> 
           )
         })
         
       }
    return(

        <ul>
           {mapReviews(isPreviev)}
        </ul>
    )
}
export {Reviews}