import { Link, isRouteErrorResponse, useRouteError } from "react-router";

interface ErrorProps {
  is404?: boolean;
}

export function ErrorElement({ is404 = false }: ErrorProps) {
  const error = useRouteError();

  if (is404) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full text-center'>
          <h1 className='text-9xl font-extrabold text-indigo-600 tracking-tight'>
            404
          </h1>
          <div className='mt-4'>
            <h2 className='text-3xl font-light text-gray-900 tracking-tight'>
              Page Not Found
            </h2>
            <p className='mt-2 text-base text-gray-600'>
              Sorry, we couldn't find the page you're looking for.
            </p>
          </div>

          <div className='mt-8 space-y-4'>
            <Link
              to='/'
              className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors'
            >
              Return to Home
            </Link>
            <div className='text-sm'>
              <button
                onClick={() => window.history.back()}
                className='font-medium text-indigo-600 hover:text-indigo-500 transition-colors cursor-pointer'
              >
                ← Go back
              </button>
            </div>
          </div>

          <div className='mt-12'>
            <p className='text-sm text-gray-500'>
              Need help?{" "}
              <Link
                to='/support'
                className='font-medium text-indigo-600 hover:text-indigo-500 transition-colors'
              >
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // For other errors
  let errorMessage: string;
  let errorDetails: string | undefined;

  if (isRouteErrorResponse(error)) {
    errorMessage =
      error.statusText || error.data?.message || "Something went wrong";
    errorDetails = error.data?.stack;
  } else if (error instanceof Error) {
    errorMessage = error.message;
    errorDetails = error.stack;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = "An unexpected error occurred";
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full text-center'>
        <h1 className='text-6xl font-extrabold text-indigo-600 tracking-tight'>
          Oops!
        </h1>
        <div className='mt-4'>
          <h2 className='text-3xl font-light text-gray-900 tracking-tight'>
            Something went wrong
          </h2>
          <p className='mt-2 text-base text-gray-600'>{errorMessage}</p>
        </div>

        {import.meta.env.DEV && errorDetails && (
          <div className='mt-6 p-4 bg-red-50 rounded-md text-left'>
            <h3 className='text-lg font-medium text-red-800'>Error Details:</h3>
            <pre className='mt-2 text-xs text-red-600 overflow-auto whitespace-pre-wrap max-h-64'>
              {errorDetails}
            </pre>
          </div>
        )}

        <div className='mt-8 space-y-4'>
          <button
            onClick={() => window.location.reload()}
            className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors'
          >
            Try Again
          </button>
          <div className='text-sm'>
            <Link
              to='/'
              className='font-medium text-indigo-600 hover:text-indigo-500 transition-colors'
            >
              Return to Home
            </Link>
          </div>
        </div>

        <div className='mt-12'>
          <p className='text-sm text-gray-500'>
            Need help?{" "}
            <Link
              to='/support'
              className='font-medium text-indigo-600 hover:text-indigo-500 transition-colors'
            >
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
