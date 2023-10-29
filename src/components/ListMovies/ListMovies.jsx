import { Link, useLocation} from "react-router-dom";

 const ListMovies = ({ArrMovies})=>{  

const location =useLocation();
console.log('location ListMovies', location)

    return (
      
        <>
       {(ArrMovies.length !==0) && <ul>
            {ArrMovies.map(item =>
            {
                if(item.title){
                    return <li key={item.id}> 
                    <Link to={`/movies/${item.id}`}>{item.title}</Link>
                     </li> 
                } else {
                    return <li key={item.id}> 
                    <Link to={`/movies/${item.id}`} state={{ from: location }} >{item.name}</Link> 
                    </li> 
                 }
            }                
            )}
        </ul> }
        </>
    )
};

export default ListMovies;