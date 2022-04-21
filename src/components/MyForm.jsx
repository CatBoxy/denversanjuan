import React from 'react';
import { Formik, Form, useField  } from 'formik';
import * as Yup from 'yup';

export default function MyForm({updatePrices, setIsLoading, id}) {

  function handleSubmit(values) {
    values.id = id;
    setIsLoading(true);
    updatePrices(values);
  }

  return (
    <>
        <Formik
          initialValues={{
            compra: '',
            venta: '',
          }}
          validationSchema={Yup.object({
            compra: Yup.number()
              .min(1, 'Ingrese mas de 1 numero')
              .positive('Debe ser positivo')
              .required('Campo requerido'),
            venta: Yup.number()
              .min(1, 'Ingrese mas de 1 numero')
              .positive('Debe ser positivo')
              .required('Campo requerido'),
          })}
          onSubmit={async (values) => {
            handleSubmit(values);
          }}
        >
          <Form className="form">
            <div className='inputContainer'>
              <div className='inputErrorContainer'>
                <PriceInput
                  name="compra"
                  type="number"
                  placeholder="Compra"
                />
              </div>
              <div className='inputErrorContainer'>
                <PriceInput
                  name="venta"
                  type="number"
                  placeholder="Venta"
                />
              </div>
            </div>
            <div className='button-checkBox'>
                <button className="button" type="submit">Actualizar precios</button>
            </div>
          </Form>

        </Formik>
    </>
  );
}


 const PriceInput = ({ label, ...props }) => {

   const [field, meta] = useField(props);

   return (
     <>
       <label htmlFor={props.id || props.name}>{label}</label>
       <input className="text-input priceInput" {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </>
   );
 };