import React from 'react';
import './DentalTerm.css'
const DentalTerm = () => {
    return (
        <div class="flex justify-center items-center experience-body">
        <img src="https://www.benefitscanada.com/wp-content/uploads/sites/7/2022/03/131452220_l.jpg" alt="" />
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