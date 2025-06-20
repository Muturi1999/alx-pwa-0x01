import React from 'react';
import Image from 'next/image';

interface MovieCardProps {
  title: string;
  poster?: string;
  year?: string;
  rating?: number;
  onClick?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  poster,
  year,
  rating,
  onClick
}) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
    >
      <div className="relative h-64 w-full">
        {poster ? (
          <Image
            src={poster}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2">{title}</h3>
        {year && <p className="text-gray-600 text-sm mb-1">{year}</p>}
        {rating && (
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-sm text-gray-700">{rating}/10</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;