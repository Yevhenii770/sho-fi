import Image from "next/image";
import ButtonSearch from "@/components/buttonSearch";
import foto from "../img/first.jpg";
import second from "../img/second.png";
import last from "../img/last.png";

export default function Home() {
  return (
    <div className="container hover:ease-in">
      <h1>Hey man, this app will help you find your dream couple</h1>
      <p>Just use the search below</p>
      <div>
        <Image
          src={foto}
          width={300}
          height={300}
          alt="Picture of the author"
        />
        <Image
          src={second}
          width={300}
          height={300}
          alt="Picture of the author"
        />
        <Image
          src={last}
          width={300}
          height={300}
          alt="Picture of the author"
        />
      </div>
      <ButtonSearch />
    </div>
  );
}
