import Link from "next/link";

export const MobileMenu = () => {
  return (
    <div>
      <div>
        <button>Close</button>
        <ul className="gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/search">Search</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MobileMenu;
