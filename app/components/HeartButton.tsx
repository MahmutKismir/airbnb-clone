"use client";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { SafeUser } from "../types";

interface HeartButtonProps {
  currentUser?: SafeUser | null;
  listingId: string;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  currentUser,
  listingId,
}) => {
  const hasFavorited = false;
  const toggleFavorite = () => {};
  return (
    <div
      onClick={toggleFavorite}
      className="relative hover:opacity-80 transition cursor-pointer "
    >
      <AiOutlineHeart
        size={28}
        className="fill-white bg-red-500 absolute -top-[2px] -right-[2px] "
      />
      <AiFillHeart
      size={28}
      className="fill-white bg-red-500 absolute -top-[2px] -right-[2px] "
      />
    </div>
  );
};

export default HeartButton;
