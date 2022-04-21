import React from 'react';
import useDate from '../hooks/useDate';

function PriceBox({name, compra, venta, createdAt}) {
  const nameUp = name.toUpperCase();
  const [ formattedDate ] = useDate({ createdAt: createdAt });

  return (
    <>
      <div className='priceContainer'>
        <div className='boxHeader'>
          <h2>{nameUp}</h2>
        </div>
        <div className='boxContent'>
          <div className='compra'>
            <div className='h3Container'>
              <h3>COMPRA</h3>
            </div>
            <p className='price'>${compra}</p>
          </div>
          <div className='venta'>
            <div className='h3Container'>
              <h3>VENTA</h3>
            </div>
            <p className='price'>${venta}</p>
          </div>
        </div>
        <div className='boxFooter'>
          <p className='footerText'>{formattedDate}</p>
        </div>
      </div>
    </>
  );
}

export default PriceBox;