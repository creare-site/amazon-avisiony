import React from 'react';

import config from '../../config';

export default function Footer() {
  return (
    <header id="header">
      <h1>{config.heading}</h1>
      <p>
        Waterproof Silicone - <a href="https://www.amazon.com/Pet-Mats-Dogs-Waterproof-Placemats/dp/B071KDCH6N/">Mat for Food Bowls Placemats</a> - Ideal Size 22" x 14".
        <br />
        Buy the product on
        {' '}<a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/Pet-Mats-Dogs-Waterproof-Placemats/dp/B071KDCH6N/">Amazon</a>
        {' '}or contact the <a href="mailto:anton@avisiony.com">company</a> (via email).
      </p>
    </header>
  );
}
