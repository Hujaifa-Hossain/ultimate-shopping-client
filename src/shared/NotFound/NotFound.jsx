import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{fontSize: '80px', textAlign: 'center'}} id="error-page">
      <h1>Oops!</h1>
      <Link to='/'>Go Back!</Link>
    </div>
  );
};

export default NotFound;