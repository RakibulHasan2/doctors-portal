import React from 'react';
import './DentalTerm.css'
const DentalTerm = () => {
    return (
        <div class="flex justify-center items-center experience-body">
        <img src="https://media.istockphoto.com/photos/healthcare-and-medicine-concept-picture-id1147580332?b=1&k=20&m=1147580332&s=170667a&w=0&h=Y3IRSFo1ATaS_-XUuQYd53PIB8EFuK3SRn94ymfZwJA=" alt="" />
           <div class="content">
          <h3 className='text font-bold text-4xl mb-4'>My Patient <br />
          <span className='text-5xl'>Experiences</span></h3>
          <p>Dental care or dentalcare is the maintenance of healthy teeth and may refer to: Oral hygiene, the practice of keeping the mouth and teeth clean in order to prevent dental disorders. Dentistry, the professional care of teeth, including professional oral hygiene and dental surgery.</p> <br />
          <p>Using a paste made of baking soda and hydrogen peroxide is said to remove plaque buildup and bacteria to get rid of stains. Mix 1 tablespoon of baking soda with 2 tablespoons of hydrogen peroxide to make a paste. Rinse your mouth thoroughly with water after brushing with this paste.</p>
            <button className='btn  hover-btn my-4'>Read More</button>
          </div>
        </div>
    );
};

export default DentalTerm;