import React from 'react';

const ToysSellAboutUs = () => {
  return (
    <div className="container mx-auto py-8 w-5/6 ">
      <h2 className="text-2xl font-bold mb-4 p-4 text-center">About Us</h2>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <img
            src="https://images.unsplash.com/photo-1558877385-81a1c7e67d72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="About Us"
            className="w-full h-auto rounded"
          />
        </div>
      <div className='flex items-center'>
      <div>
          <h3 className="text-xl font-bold mb-2">Our Story</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique tellus sapien, sit amet tincidunt nisi rhoncus a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec eget nunc ac est tempus lacinia.
          </p>
          <p className="text-gray-700 mt-4">
            Vestibulum mollis mauris nec ante tincidunt, sed aliquet dolor finibus. Phasellus in pharetra lacus. Quisque condimentum mauris at suscipit varius. Sed convallis purus vel ex fringilla, nec pharetra elit ultricies.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ToysSellAboutUs;
