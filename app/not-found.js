import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-4xl font-bold text-good font-poppins">
        404 - Page Not Found
      </h1>
      <p className="text-good font-poppins">
        The page you are looking for could not be found.
      </p>
      <Link href="/">
        <button className="mt-4 bg-accent hover:bg-accent/80  border border-b-[6px] border-b-tertiary text-black font-poppins font-bold py-2 px-4 rounded">
          Back to Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
