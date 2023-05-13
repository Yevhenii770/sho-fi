import Link from "next/link";

const ButtonSearch = () => {
  return (
    <div className="flex justify-center">
      <Link
        className="p-2 bg-main rounded-full hover:bg-slate-500 ease-in duration-300 hover:text-white"
        href="/search"
      >
        Search
      </Link>
    </div>
  );
};

export default ButtonSearch;
