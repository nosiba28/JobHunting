import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">

            <h1>Oops!</h1>
            <h1>404 <small>Error</small></h1>
            <i> <p>Sorry, an unexpected error has occurred.</p>
                <p>Page not found!</p></i>

        </div>
    );
}