import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Head from 'next/head'
import * as Yup from 'yup'
import { useFormik } from "formik"
import { Container, Box, Banner } from '../styles/pages/Login'
import Input from '../components/Input'
import Button from '../components/Button'
import Label from '../components/Label'
import * as constants from '../store/constants/modules/loginConstants'
import { LoginState } from '../store/ducks/login'

const MY_INFO_FIELDS_MESSAGE = {
  REQUIRED: 'Campo obrigatório',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Digite um e-mail válido').typeError('').required(MY_INFO_FIELDS_MESSAGE.REQUIRED),
  password: Yup.string().typeError('').required(MY_INFO_FIELDS_MESSAGE.REQUIRED),
});

export type LoginProps = LoginState & {}

const Login: React.FC<LoginProps> = () => {
  const dispatch = useDispatch();
  const {
    data,
    fetching,
    success
  } = useSelector<{ login: LoginState }, LoginProps>(({ login }) => ({
    ...login,
  }));
  const handleOnSubmit = (payload) => {
    if (!fetching && !success) {
      dispatch({
        type: constants.LOGIN_POST,
        payload
      });
    }
  };
  const form = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => handleOnSubmit(values),
    validationSchema: validationSchema
  });
  const isMobile = globalThis.innerWidth < 768

  return (
    <div>
      <Head>
        <title>Simple Login</title>
      </Head>

      <main>
        <Container>
          <Banner />
          <Box>
            <h1>
              Olá, seja <br/> bem-vido!
            </h1>
            <h4>Para acessar a plataforma, faça seu login.</h4>

            { !data.token && !success && (
              <form onSubmit={form.handleSubmit}>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  name="email"
                  type="text"
                  placeholder="example@mail.com"
                  onChange={form.handleChange}
                  value={form.values.email}
                  className={form.errors?.email && 'error'}
                />
                {form.errors?.email && <Label className='error'> {form.errors?.email} </Label>}

                <Label htmlFor="password">Senha</Label>
                <Input
                  name="password"
                   onChange={form.handleChange}
                  className={form.errors?.password && 'error'}
                  type="password"
                  placeholder="******" />

                {form.errors?.password && <Label className='error'> {form.errors?.password} </Label>}
                <Button type="submit">Entrar</Button>
              </form>
            )}

            {
              data.token && success && (
                <p>Como vai {data.user?.name}?</p>
              )
            }

            { !isMobile && !data.token && !success && (
              <div className="forgotPassword">
                <p>Esqueceu seu login ou senha?</p>
                <p>Clique <a href="#">aqui</a></p>
              </div>
            )}
          </Box>
          { isMobile && !data.token && !success && (
            <div className="forgotPassword">
              <p>Esqueceu seu login ou senha?</p>
              <p>Clique <a href="#">aqui</a></p>
            </div>
          )}
        </Container>
      </main>
    </div>
  )
}

export default Login
