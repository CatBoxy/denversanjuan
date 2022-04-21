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
            <h3>Compra</h3>
            <p className='price'>${compra}</p>
          </div>
          <div className='venta'>
            <h3>Venta</h3>
            <p className='price'>${venta}</p>
          </div>
        </div>
        <div className='boxFooter'>
          <p className='footerText'>{formattedDate}</p>
        </div>
        {/* <p>
          {`Moneda: ${name} compra: ${compra} venta: ${venta}`}
        </p> */}
      </div>
    </>
  );
}

export default PriceBox;