import type {Route} from "../../../.react-router/types/app/+types/root";

const ErrorHandling = ({error}: Route.ErrorBoundaryProps) => {
    console.log(error)
    return (<>
        hellos
    </>)
}

export default ErrorHandling;