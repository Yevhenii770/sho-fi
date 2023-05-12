import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <div className=" container max-w-screen-xl bg-slate-400 py-4">
        <nav>
          <ul className="flex justify-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashbord">Dashbord</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
