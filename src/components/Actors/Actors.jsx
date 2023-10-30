import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {actorsView} from '../../Api';
import { ImgActor,ListActors} from './Actors.styled'

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

        const defaultImg = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>'


       return arrActors.map((actor)=>{
        const {cast_id,profile_path,character } =actor;
          return (<li key={cast_id}>  <ImgActor   src={ profile_path ?  `https://image.tmdb.org/t/p/w500${profile_path}` :defaultImg}
          alt={actor.name}  />
          <p>{actor.name}</p>
          <p>{`Character: ${character}`}</p>
           </li> 
          )
        })
        
      }
    return (
        <ListActors>
        {
          actors(isCast)
        }           
        </ListActors>
    )
} 

export default Actors;