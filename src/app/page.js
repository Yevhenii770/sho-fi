import Carousel from "../components/Carousel";
import Image from "next/image";
import ButtonSearch from "@/components/buttonSearch";
import IMAGES from "../img";

export default function Home() {
  return (
    <div className="container hover:ease-in">
      <div className="">
        <h1 className="text-center font-normal my-4">
          Shoes Finder - це ресурс, який допоможе заощадити час та гроші
        </h1>
        {/* Carousel */}
        <div className="lg:w-3/4 mx-auto my-2 ">
          <Carousel loop>
            {IMAGES.map((src, i) => {
              return (
                <div className="relative h-64 flex-[0_0_100%] " key={i}>
                  <Image
                    src={src}
                    fill
                    className="object-cover rounded"
                    alt="alt"
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
        {/* Carousel */}
        <p className="text-center">
          Тобі більше не потрібно переплачувати різним модним `ТІПАМ` в
          інстаграмі, щоб замовити круті кроси дешевше ніж в Україні
        </p>
        <p className="text-center">Просто скористайтеся пошуком нижче</p>
      </div>
      <div className="relative mb-8"></div>
      <ButtonSearch />
    </div>
  );
}
