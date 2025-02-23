import styled from 'styled-components';

const StyledError = styled.div`
  .error_text {
    color: red;
    font-size: 180px;
    letter-spacing: 10px;
  }
`;

function Error() {
  return (
    <StyledError>
      <h1 className='error_text'>404</h1>
    </StyledError>
  );
}

export default Error;
