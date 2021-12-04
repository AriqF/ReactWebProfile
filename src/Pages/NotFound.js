import { Link } from "react-router-dom";

function NotFound(){
    return(
        <>
            <div className="notFound">
                <h2>Oops!</h2>
                <p>The page that you're looking for is not here</p>
                <Link to="/">Back to Home</Link>
            </div>
        </>
    );
}

export default NotFound;