import { ToastContainer as ToastifyContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const StyledToastContainer = styled(ToastifyContainer)`
  &.Toastify__toast-container {
    width: 420px;
  }

  .Toastify__toast {
    border-radius: 8px;
    padding: 16px;
  }

  .Toastify__toast--success {
    background: #fff;
  }

  .Toastify__toast--error {
    background: #fff;
  }

  .Toastify__toast-body {
    font-size: 14px;
    line-height: 1.5;
    white-space: pre-line;
  }
`;

export const ToastContainer = () => {
  return <StyledToastContainer position='top-right' autoClose={3000} hideProgressBar={true} closeOnClick pauseOnHover draggable={false} />;
};
