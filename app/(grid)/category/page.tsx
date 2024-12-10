import React from "react";
import Heading from "@/app/components/Heading";
import { APIURL, KEY } from "@/app/constants";

const CategoryPage = async ({ params }) => {
  const { category } = params;

  try {
    const res = await fetch(`${APIURL}games?genre=${category}&key=${KEY}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error("Failed to fetch data");

    const data = await res.json();
    const games = data.results;

    return (
      <div className="mt-10 px-4 md:px-8 lg:px-16">
        {/* Page Heading */}
        <Heading text={`Games in ${category}`} />

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Game Image */}
              <img
                src={game.background_image}
                alt={game.name}
                className="w-full h-48 object-cover"
              />
              {/* Game Info */}
              <div className="p-4">
                <h3 className="text-lg font-bold">{game.name}</h3>
                <p className="text-sm text-gray-400">{game.released || "Unknown Release Date"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="mt-10 px-4 md:px-8 lg:px-16">
        <Heading text="Error Loading Games" />
        <p className="text-red-500">Failed to load games for this category. Please try again later.</p>
      </div>
    );
  }
};

export default CategoryPage;
