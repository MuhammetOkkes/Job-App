import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import ImgNotFound from "../assets/images/not-found.svg";
import ImgError from "../assets/images/error.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={ImgNotFound} alt="not-found" className="not-found" />
          <h3>Page Not Found</h3>
          <p>we can`t seem to find the page you are looking for</p>
          <Link to="/dashboard">back to home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <img src={ImgError} alt="standart error" className="error" />
        <h3>Something went wrong</h3>
        <br />
        <Link to="/dashboard">back to home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
