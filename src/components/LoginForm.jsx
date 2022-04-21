import React from 'react';
import { Formik, Form, useField  } from 'formik';
import * as Yup from 'yup';
import { useAuthState } from '../context/authProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import swal from 'sweetalert';

function LoginForm(props) {

  const { logIn, error, setError, isLoading } = useAuthState();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  function handleSubmit(values) {
    logIn(values, () => {
      navigate(from, { replace: true });
    });
  }

  useEffect(() => {
    if (error) {
      swal('Las credenciales son invalidas')
        .then(() => {
          setError(false);
        });
    }
  }, [ error ]);

  return (
    <>
       <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Email invalido')
              .required('Requerido'),
            password: Yup.string()
              .min(2, 'Debe contener al menos 2 caracteres')
              .required('Requerido'),
          })}
          onSubmit={async (values) => {
            handleSubmit(values);
          }}
        >

          <Form className="form">
            <div>
              <TextInput
                name="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <TextInput
                name="password"
                type="password"
                placeholder="Contraseña"
              />
              <div className='button-checkBox'>
                <button className="button" type="submit">Enviar</button>
              </div>
            </div>
          </Form>

        </Formik>
    </>
  );
}

export default LoginForm;

const TextInput = ({ label, ...props }) => {

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