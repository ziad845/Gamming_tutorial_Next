import React from "react";
import Heading from "@/app/components/Heading";
import { FiMessageCircle, FiHeart, FiUser } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

const friendsData = [
  {
    id: 1,
    name: "Hassan",
    avatar: "/felfel.jpg",
    status: "Online",
  },
  {
    id: 2,
    name: "Mohamed",
    avatar: "/yamal.jpg",
    status: "Offline",
  },
  {
    id: 3,
    name: "Ahmed Adel",
    avatar: "/salah.jpg",
    status: "Online",
  },
  {
    id: 4,
    name: "Mohamed Safwat",
    avatar: "/Ronaldo.jpg",
    status: "Offline",
  },
  {
    id: 5,
    name: "Ahmed Khaled",
    avatar: "/Gavi.jpg",
    status: "Online",
  },
  {
    id: 6,
    name: "Lambard",
    avatar: "/Messi2.jpg",
    status: "Offline",
  },
  {
    id: 7,
    name: "Mahmoud",
    avatar: "/Pedri.jpg",
    status: "Online",
  },
  {
    id: 8,
    name: "Ziad Fahim",
    avatar: "/Messi.jpg",
    status: "Online",
  },
];

const FriendsPage = () => {
  return (
    <div className="mt-10 px-4 md:px-8 lg:px-16">
      <Heading text="Your Friends" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {friendsData.map((friend) => (
          <div
            key={friend.id}
            className="bg-white bg-opacity-50 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 backdrop-blur-md"
          >
        
            <div className="relative">
              <img
                src={friend.avatar}
                alt={friend.name}
                className="w-full h-40 object-contain"
              />
            </div>

            
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">{friend.name}</h3>
              <p
                className={`text-sm font-medium ${
                  friend.status === "Online" ? "text-green-500" : "text-gray-400"
                }`}
              >
                {friend.status}
              </p>
            </div>

           
            <div className="flex justify-around items-center py-3 bg-gray-100 bg-opacity-50">
              <button
                aria-label="Message"
                className="text-blue-500 hover:text-blue-600 transition-colors"
              >
                <FiMessageCircle size={22} />
              </button>
              <button
                aria-label="Like"
                className="text-red-500 hover:text-red-600 transition-colors"
              >
                <FiHeart size={22} />
              </button>
              <button
                aria-label="Profile"
                className="text-gray-500 hover:text-gray-600 transition-colors"
              >
                <FiUser size={22} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;
