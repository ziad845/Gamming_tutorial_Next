import React from "react";
import Heading from "@/app/components/Heading";
import { FiMessageCircle, FiHeart, FiUser } from "react-icons/fi";

const friendsData = [
  {
    id: 1,
    name: "Hassan",
    avatar: "/avatars/john.jpg",
    status: "Online",
  },
  {
    id: 2,
    name: "Mohamed",
    avatar: "/avatars/jane.jpg",
    status: "Offline",
  },
  {
    id: 3,
    name: "Ahmed Adel",
    avatar: "/avatars/mike.jpg",
    status: "Playing Call of Duty",
  },
  {
    id: 4,
    name: "Mohamed Safwat",
    avatar: "/avatars/sarah.jpg",
    status: "Watching Netflix",
  },
  {
    id: 5,
    name: "Ahmed Khaled",
    avatar: "/avatars/sarah.jpg",
    status: "Playing Gta",
  },
  {
    id: 6,
    name: "Lambard",
    avatar: "/avatars/sarah.jpg",
    status: "Online",
  },
  {
    id: 7,
    name: "Mahmoud",
    avatar: "/avatars/sarah.jpg",
    status: "Watching Netflix",
  },
  {
    id: 8,
    name: "Ziad Fahim",
    avatar: "/avatars/sarah.jpg",
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
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
          
            <div className="relative">
              <img
                src={friend.avatar}
                alt={friend.name}
                className="w-full h-40 object-cover"
              />
         
              <span
                className={`absolute bottom-2 right-2 w-4 h-4 rounded-full ${
                  friend.status === "Online"
                    ? "bg-green-500"
                    : friend.status === "Offline"
                    ? "bg-gray-400"
                    : "bg-blue-500"
                }`}
              ></span>
            </div>

          
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">{friend.name}</h3>
              <p className="text-sm text-gray-600 truncate">{friend.status}</p>
            </div>

         
            <div className="flex justify-around items-center py-2 bg-gray-100">
              <button
                aria-label="Message"
                className="text-blue-500 hover:text-blue-600"
              >
                <FiMessageCircle size={20} />
              </button>
              <button
                aria-label="Like"
                className="text-red-500 hover:text-red-600"
              >
                <FiHeart size={20} />
              </button>
              <button
                aria-label="Profile"
                className="text-gray-500 hover:text-gray-600"
              >
                <FiUser size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;
