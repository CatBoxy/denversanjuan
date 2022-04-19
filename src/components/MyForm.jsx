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
              .min(1, 'Este campo debe contener al menos 1 número')
              .positive('Este campo debe ser un número positivo')
              .required('Este campo debe contener al menos 1 número'),
            venta: Yup.number()
              .min(1, 'Este campo debe contener al menos 1 número')
              .positive('Este campo debe ser un número positivo')
              .required('Este campo debe contener al menos 1 número'),
          })}
          onSubmit={async (values) => {
            handleSubmit(values);
          }}
        >

          <Form className="form">
            <div>
              <PriceInput
                name="compra"
                type="number"
                placeholder="Nuevo valor compra"
              />
            </div>
            <div>
              <PriceInput
                name="venta"
                type="number"
                placeholder="Nuevo valor venta"
              />
              <div className='button-checkBox'>
                <button className="button" type="submit">Actualizar precios</button>
              </div>
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
       <input className="text-input" {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </>
   );
 };