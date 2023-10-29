import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {actorsView} from '../../Api';

const Actors =()=>{

    const [isCast, setCast] = useState([]);
    //Проводимо пошук та рендеримо перелік акторів тільки якщо пустий масив акторів.
    const params =useParams();
       useEffect(() => {
        
       if (isCast.length === 0) {
          async function fetchData() {
            try {
              await actorsView(params.movieId).then(data => {
               setCast(data.cast);
               //console.log('data.cast', data.cast)
                });
            } catch (error) {
              console.log('error', error);
            } finally {
            }
          }
          fetchData();
     }
      }, [params.movieId, isCast.length ]);

      const actors =(arrActors)=>{
       return arrActors.map((actor)=>{
          return (<li key={actor.cast_id}>  <img   src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
          alt={actor.name}  />
          <p>{actor.name}</p>
          <p>{`Character: ${actor.character}`}</p>
           </li> 
          )
        })
        
      }
    return (
        <ul>
        {
          actors(isCast)
        }           
        </ul>
    )
} 

export { Actors};