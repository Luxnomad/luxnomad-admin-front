import { TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import { showSuccessToast, showErrorToast } from '@@components/Toast';
import { LOGIN_MESSAGES } from '@@constants/messages';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { loginRequest, loginSuccess, loginFailure } from '@@stores/auth/reducer';

const StyledLogin = styled.div`
  .login__form {
    padding: 20px 30px;
    margin: 0 auto;
    margin-top: 300px;
    width: 500px;

    border: 1px solid #aaa;
    border-radius: 30px;
  }
`;

function Login() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (form: { id: string; password: string }) => {
    dispatch(loginRequest(form));
  };

  useActionSubscribe({
    type: loginSuccess.type,
    callback() {
      showSuccessToast(LOGIN_MESSAGES.SUCCESS);
      navigate(state?.from ?? '/');
    },
  });

  useActionSubscribe({
    type: loginFailure.type,
    callback: ({ payload }: ReturnType<typeof loginFailure>) => {
      showErrorToast(payload ? `ERROR: \n${payload}` : LOGIN_MESSAGES.FAILURE);
    },
  });

  return (
    <StyledLogin>
      <Formik initialValues={{ id: '', password: '' }} onSubmit={handleSubmit}>
        {({ getFieldProps, handleSubmit }) => (
          <Form className='login__form' onSubmit={handleSubmit}>
            <Flex.Vertical gap={20}>
              <TextField placeholder='아이디를 입력하세요' {...getFieldProps('id')} />
              <TextField placeholder='비밀번호를 입력하세요' type='password' {...getFieldProps('password')} />
              <Button.Medium type='submit'>로그인</Button.Medium>
            </Flex.Vertical>
          </Form>
        )}
      </Formik>
    </StyledLogin>
  );
}

export default Login;
