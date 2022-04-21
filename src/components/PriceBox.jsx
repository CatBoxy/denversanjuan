import React from 'react';

function PriceBox({name, compra, venta}) {
  const nameUp = name.toUpperCase();
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
          <p className='footerText'>fecha de actualizacion</p>
        </div>
        {/* <p>
          {`Moneda: ${name} compra: ${compra} venta: ${venta}`}
        </p> */}
      </div>
    </>
  );
}

export default PriceBox;