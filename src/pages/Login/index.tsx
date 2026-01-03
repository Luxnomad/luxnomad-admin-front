import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import TextField from '@@components/TextField';
import { showSuccessToast, showErrorToast } from '@@components/Toast';
import Typography from '@@components/Typography';
import { LOGIN_MESSAGES } from '@@constants/messages';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { loginRequest, loginSuccess, loginFailure } from '@@stores/auth/reducer';

const StyledLogin = styled.div`
  .login__form {
    padding: 20px 30px;
    margin: 0 auto;
    margin-top: 200px;
    width: 500px;
  }
  .text__wrap {
    padding: 0 30px;
    margin: 0 auto;
    width: 500px;
    p {
      line-height: 20px;
    }
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
              <Typography.Headline2 className='tw-text-center'>Admin Sign in</Typography.Headline2>
              <TextField placeholder='Please enter id' {...getFieldProps('id')} />
              <TextField placeholder='Please enter password' type='password' {...getFieldProps('password')} />
              <Button.Medium type='submit'>Sign In</Button.Medium>
            </Flex.Vertical>
          </Form>
        )}
      </Formik>
      <div className='text__wrap'>
        <Typography.Subtitle2>
          Default booking for this system is for two adults.
          <br />
          <br />
          Any additional person (including children) beyond the maximum occupation limit, requires separate confirmation from the hotel to ensure
          compliance with occupancy limits and to account for any extra charges.
          <br />
          <br />
          Please send an email to the hotel for their separate confirmation immediately after obtaining booking reference number.
        </Typography.Subtitle2>
      </div>
    </StyledLogin>
  );
}

export default Login;
