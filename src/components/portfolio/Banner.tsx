"use client";
const headerImg =
  "https://raw.githubusercontent.com/judygab/web-dev-projects/42c815099332e69edcef4593d6f593224b94ba40/personal-portfolio/src/assets/img/header-img.svg";
import TrackVisibility from "react-on-screen";
import { Cover } from "../ui/cover";
import { MorphingText } from "../ui/morphing-text";

export const Banner = () => {
  return (
    <section className="banner border border-secondary" id="home">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className=" col-span-12 md:col-span-6 xl:col-span-7">
            <TrackVisibility>{({}) => <BannerText />}</TrackVisibility>
          </div>
          <div className=" col-span-12 md:col-span-6 xl:col-span-5">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
};

function BannerText() {
  return (
    <section className="relative border border-primary">
      <div className="relative mx-auto max-w-screen-xl px-4  sm:px-6 lg:flex lg:h-[600] lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <Cover>
              <span className="text-yellow-500">RABETSY</span>
              <span> Rolio</span>
            </Cover>
            <div className="flex mx-auto">
              <div>Développeur</div>
              <MorphingText texts={["Web", "Mobile", "Desktop"]} />
            </div>
          </h1>
          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-purple-500 px-12 py-3 text-sm font-medium text-forground shadow hover:bg-yellow-600 hover:text-black focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Télécharger CV
            </a>
            <a
              href="#"
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium shadow text-secondary focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Mon compte Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
