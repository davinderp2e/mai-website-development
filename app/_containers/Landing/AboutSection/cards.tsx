import React from 'react';
import Image from 'next/image';
import AboutUs1 from 'public/images/aboutUs-1.png';
import AboutUs2 from 'public/images/aboutUs-2.png';
import AboutUs3 from 'public/images/aboutUs-3.png';

const cards = [
  {
    id: 1,
    title: 'About MAI',
    image: AboutUs1,
  },
  {
    id: 2,
    title: 'Strength',
    image: AboutUs2,
  },
  {
    id: 3,
    title: 'Vision',
    image: AboutUs3,
  },
];

interface ICardProps {
  selectedImage: any;
  onCardClick: any;
}

const Cards: React.FC<ICardProps> = ({ selectedImage, onCardClick }) => {
  return (
    <div className="cards">
      {
        cards.map((card, index) => (
          <div className="card" key={index} onClick={onCardClick(card.id)}>
            <div className="overlay" />
            <div className={selectedImage !== card.id ? 'image' : 'image selected'}>
              <Image className={selectedImage !== card.id ? `clip clip-${card.id}` : 'selected'} src={card.image} alt="" />
            </div>
            <div className={selectedImage !== card.id ? 'title-wrapper' : 'title-wrapper selected'}>
              <div className="text-background">
                <p className="title">{card.title}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
};

export default Cards;
