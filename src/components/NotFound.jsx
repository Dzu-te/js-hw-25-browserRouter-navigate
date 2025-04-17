const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">404 Not Found</h1>
      <p className="mt-4 text-lg text-gray-700">
        Sorry, the page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Home
      </a>
      <p className="mt-4 text-sm text-gray-500">
        If you think this is a mistake, please contact support.
      </p>
      <p className="mt-4 text-sm text-gray-500">
        Or return to the previous page.
      </p>
    </div>
  );
};
export default NotFound;
