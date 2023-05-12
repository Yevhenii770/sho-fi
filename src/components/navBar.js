import Link from "next/link";
import Earth from "../svg/earth-svgrepo-com.svg";
export default function Navbar() {
  return (
    <header>
      <div className=" container max-w-screen-xl bg-slate-400 py-4 flex items-center justify-between">
        <Link href="/">
          Sho-<span>Fi</span>
        </Link>
        {/* <nav>
          <ul className="flex justify-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/search">Search</Link>
            </li>
          </ul>
        </nav> */}
        <Earth />
      </div>
    </header>
  );
}
