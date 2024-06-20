import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string[];
}

const Card: React.FC<CardProps> = ({ id, title, description, imageUrl }) => {
  return (
    <Link href={`/events/${id}`}>
      <div className="max-w-lg bg-white rounded-sm overflow-hidden shadow-lg h-full flex flex-col justify-between">
        <div>
          <div className="relative h-96 bg-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${imageUrl[0]}`}
              layout="fill"
              style={{ objectFit: "cover" }}
              alt={title}
              className="rounded-t"
            />
          </div>
          <div className="px-6 py-2">
            <div className="text-2xl mb-2 uppercase line-clamp-2">{title}</div>
            <p className="text-gray-700 py-2 text-base truncate">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;