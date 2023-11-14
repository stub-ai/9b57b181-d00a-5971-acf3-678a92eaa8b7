import React from 'react';

interface PokemonCardProps {
  name: string;
  image: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-2">
      <img className="w-full h-32 object-cover" src={image} alt={name} />
      <h2 className="text-xl font-bold mt-4">{name}</h2>
    </div>
  );
};

export default PokemonCard;