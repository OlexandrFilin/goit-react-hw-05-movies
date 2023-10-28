import GoBack from "components/GoBack/GoBack";
import { queryCardMovie } from '../../queri';
import { useState, useEffect } from "react";

const MovieCard =({cargId})=>{

     const [isCargMovie, setCargMovie] = useState({});

    useEffect(() => {
      async function fetchData() {
        try {
          await queryCardMovie(cargId).then(data => {
            console.log('data.results', data.results)
            setCargMovie(data.results);
           console.log('isCargMovie', isCargMovie)
          });
        } catch (error) {
          console.log('error', error);
        } finally {
        }
      }
      
      fetchData();
    }, [cargId, isCargMovie]);
  

    return(
       <>
    <GoBack/>
    <div>
        <img
        src=''
        alt="isCargMovie.title"
        />
    </div>
</> 
    )
    
}
export {MovieCard};