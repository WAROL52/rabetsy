"use client";
const headerImg =
  "https://raw.githubusercontent.com/judygab/web-dev-projects/42c815099332e69edcef4593d6f593224b94ba40/personal-portfolio/src/assets/img/header-img.svg";
import TrackVisibility from "react-on-screen";
import { Cover } from "../ui/cover";
import { MorphingText } from "../ui/morphing-text";
import { RocketMagic } from "../RocketMagic";
import { SvgPlanet } from "../SvgPlanet";
import { SlowMousePointerFinger } from "../SlowMousePointerFinger";
import { useInViewport } from "@mantine/hooks";
import { useCvStore } from "@/stores/cvStore";

export const Banner = () => {
  const { ref, inViewport } = useInViewport<HTMLDivElement>();
  return (
    <section
      className="banner h-[92vh] flex items-center md:h-[75vh]"
      id="home"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className=" col-span-12 md:col-span-6 xl:col-span-7">
            <BannerText />
          </div>
          <div className=" col-span-12 md:col-span-6 xl:col-span-5">
            {/* <img src={headerImg} alt="Header Img" /> */}
            <SvgPlanet></SvgPlanet>
            <SlowMousePointerFinger isVisible={inViewport} />
          </div>
        </div>
      </div>
    </section>
  );
};

function BannerText() {
  const { isLoading, data } = useCvStore();
  return (
    <section className="">
      <div className=" mx-auto p-4 ">
        <div className="">
          <h1 className="text-center text-3xl font-extrabold sm:text-5xl">
            <Cover>
              <span className="text-yellow-500">{data?.firstname}</span>
              <span> {data?.lastname}</span>
            </Cover>
          </h1>
          <div className="flex justify-center gap-2 text-3xl font-extrabold sm:text-5xl">
            <span className="">{data?.sections.hero.head.title}</span>
            <MorphingText
              className=" text-center w-1/4"
              texts={data?.sections.hero.head.descriptions || []}
            />
          </div>
          <p className="mx-auto max-w-lg sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className=" mt-8 flex flex-wrap gap-4 text-center justify-center">
            <a
              href="#"
              className="block w-full rounded bg-purple-500 px-12 py-3 text-sm font-medium text-forground shadow focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Télécharger CV
            </a>
            <a
              href="#"
              className="block w-full rounded bg-primary text-primary-foreground px-12 py-3 text-sm font-medium shadow  focus:outline-none focus:ring sm:w-auto"
            >
              Mon compte Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
