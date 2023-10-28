import { Link } from "react-router-dom";

 const ListMovies = ({ArrMovies})=>{    
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
                    <Link to={`/movies/${item.id}`}>{item.name}</Link> 
                    </li> 
                 }
            }                
            )}
        </ul> }
        </>
    )
};

export default ListMovies;