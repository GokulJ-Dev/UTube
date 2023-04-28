import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    const { error, status, statusText } = err;
    return (
        <>
            <h1>Oops!</h1>
            <h4>{status + " " + statusText}</h4>
            <h5>{error.message}</h5>
        </>
    )
}

export default Error;