import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './toy.css'
const toys = [
  {
    id: 1,
    name: 'Teddy Bear',
    image: 'https://images.unsplash.com/photo-1508076092314-77ad4b6b360a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 2,
    name: 'LEGO Set',
    image: 'https://images.unsplash.com/photo-1624979641604-f01368fab830?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
  },
  {
    id: 3,
    name: 'Dollhouse',
    image: 'https://images.unsplash.com/photo-1645354730201-52d7e726c9e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RG9sbGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    name: 'Action Figure',
    image: 'https://images.unsplash.com/photo-1608278047522-58806a6ac85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWN0aW9uJTIwRmlndXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 5,
    name: 'Board Game',
    image: 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Qm9hcmQlMjBHYW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 6,
    name: 'Remote Control Car',
    image: 'https://images.unsplash.com/photo-1646162522783-50acdefc92a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFJlbW90ZSUyMENvbnRyb2wlMjBDYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  // Add more toy objects as needed
];

const ToyGallery = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Toy Gallery</h2>
      <TransitionGroup className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
        {toys.map((toy) => (
          <CSSTransition key={toy.id} classNames="fade" timeout={500}>
            <div className="flex flex-col items-center">
              <img
                src={toy.image}
                alt={toy.name}
                className="w-60 h-60 object-cover rounded"
              />
              <p className="mt-2 text-lg font-bold">{toy.name}</p>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default ToyGallery;
