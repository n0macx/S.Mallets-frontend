import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';

const CartPage = () => {
  const { t } = useTranslation('registerForm');

  const validationSchema = Yup.object({
    name: Yup.string()
      .required(t('errNoName'))
      .min(3, t('errName'))
      .max(15, t('errName2')),
    lastname: Yup.string()
      .required(t('errNoLastname'))
      .min(3, t('errLastname'))
      .max(15, t('errLastname2')),
    password: Yup.string()
      .required(t('errNoPassword'))
      .min(8, t('errPassword1'))
      .matches(/[a-zA-Z]/, t('errPassword2')),
    email: Yup.string().required(t('errNoEmail')).email(t('errEmail')),
  });

  return (
    <>
      <div>CartPage</div>
      {/* <div className="mx-8 my-8 w-auto">
        Strona główna {'>'} Koszyk {'>'}
        <b> Zarejestruj się</b>
      </div> */}
      <Formik
        initialValues={{
          name: '',
          lastname: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 3));
        }}
      >
        <Form>
          <div className="form-wrapper m-[1.5rem_1.5rem_1.5rem_2rem] flex flex-col">
            <div className="relative">
              <Field
                id="name"
                name="name"
                type="text"
                placeholder={t('name')}
                className="form-input"
              ></Field>
              <ErrorMessage
                component="p"
                name="name"
                className="absolute top-16 text-xs text-red-600"
              />
            </div>
            <div className="relative">
              <Field
                id="lastname"
                name="lastname"
                type="text"
                placeholder={t('lastname')}
                className="form-input"
              ></Field>
              <ErrorMessage
                component="p"
                name="lastname"
                className="absolute top-16 text-xs text-red-600"
              />
            </div>
            <div className="relative">
              <Field
                id="email"
                name="email"
                type="email"
                placeholder={t('email')}
                className="form-input"
              ></Field>
              <ErrorMessage
                component="p"
                name="email"
                className="absolute top-16 text-xs text-red-600"
              />
            </div>
            <div className="relative">
              <Field
                id="password"
                name="password"
                type="password"
                placeholder={t('password')}
                className="form-input"
              ></Field>
              <ErrorMessage
                component="p"
                name="password"
                className="absolute top-16 text-xs text-red-600"
              />
            </div>
            <button className="btn-primary">{t('register')}</button>
            <div className=" my-8 w-96 border border-black p-4 text-sm ">
              {t('errAccountP1')}
              <br />
              <br />
              {t('errAccountP2')}
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default CartPage;