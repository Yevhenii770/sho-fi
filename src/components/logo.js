import Link from "next/link";
import LogoSvg from "../svg/logo-color.svg";

export const Logo = () => {
  return (
    <Link href="/">
      <LogoSvg />
    </Link>
  );
};

export default Logo;
