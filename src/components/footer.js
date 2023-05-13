import Logo from "./logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-main">
      <div className="container py-4 flex flex-col items-center">
        <Logo />
        <p>
          <Link
            href="https://www.linkedin.com/in/yevhenii-sitolenko/"
            className=""
          >
            LinkedIn
          </Link>
        </p>
        <p>
          Created by
          <Link
            href="https://github.com/Yevhenii770"
            className=" underline underline-offset-1"
          >
            Yevhenii
          </Link>
        </p>
      </div>
    </footer>
  );
}
