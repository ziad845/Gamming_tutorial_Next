import { getGame } from "@/app/api/api";
import GamesSlider from "@/app/components/GamesSlider";
import SwiperCards from "@/app/components/SwiperCards";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  try {
    const { id } = await params;
    const game = await getGame(id);
    const { screenshots, data, similar }: { screenshots: any[]; data: Game; similar: any[] } = game;

    return (
      <div className="mt-10">
        <div className="flex flex-col gap-4">

          <h1 className="text-2xl text-white">{data.name}</h1>
          <div>Rating count: {data.ratings_count}</div>


          <SwiperCards
            slidesPerView={1}
            className="h-full"
            items={[...screenshots.results, data.background_image, data.background_image_additional].map((screenshot, index) => {
              return {
                card: (
                  <div key={index} className="rounded-xl overflow-hidden h-[36rem] w-full relative">
                    <Image src={screenshot.image || screenshot} alt={data.name} fill className="object-cover" />
                  </div>
                ),
                src: screenshot.image || screenshot,
              };
            })}
            paginationImages
          />


          <p className="mt-10">{data.description_raw}</p>
        </div>


        <GamesSlider title="Similar Games" games={similar.results} />
      </div>
    );
  } catch (error) {
    return <div className="text-white">Failed to load game details. Please try again later.</div>;
  }
};

export default page;
