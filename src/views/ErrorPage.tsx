import * as React from 'react';

const ErrorPage: React.FC = () => {
  return (
    <div className="h-screen ">
      <a className="underline absolute pt-2 pl-2 text-gray-900" href="/">
        back to home page
      </a>
      <p className="text-red-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 text-9xl  font-extrabold ">
        404
      </p>
      <img className="w-screen h-screen" src="src/images/mr.gif" alt="404 not found" />
    </div>
  );
};

export default ErrorPage;
