import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="bg-slate-400 py-4">
        <Link href="/">
          Sho-<span>Fi</span>
        </Link>
        <p>Created by Yevhenii</p>
      </div>
    </footer>
  );
}
