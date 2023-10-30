import { Link, useLocation} from "react-router-dom";

 const ListMovies = ({ArrMovies})=>{  

const locationList =useLocation();
    return (
        <>
       {(ArrMovies.length !==0) && <ul>
            {ArrMovies.map(item =>
            {
                if(item.title){
                    return <li key={item.id}> 
                    <Link to={`/movies/${item.id}`} state={{ from: locationList}} >{item.title}</Link>
                     </li> 
                } else {
                    return <li key={item.id}> 
                    <Link to={`/movies/${item.id}`} state={{ from: locationList}} >{item.name}</Link> 
                    </li> 
                 }
            }                
            )}
        </ul> }
        </>
    )
};
export default ListMovies;