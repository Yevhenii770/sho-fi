import Link from "next/link";

const ButtonSearch = () => {
  return (
    <Link className="p-2 rounded-sm bg-orange-400" href="/search">
      Search
    </Link>
  );
};

export default ButtonSearch;
