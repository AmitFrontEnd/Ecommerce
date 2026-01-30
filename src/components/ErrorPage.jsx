import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  const message = error?.statusText || error?.message || "Something went wrong";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 px-4">
      <h1 className="text-3xl font-bold">Oops!</h1>

      <p className="text-slate-600 dark:text-slate-300">
        Sorry, an unexpected error has occurred.
      </p>

      <p className="text-slate-700 dark:text-slate-200 italic">{message}</p>
    </div>
  );
};

export default ErrorPage;
