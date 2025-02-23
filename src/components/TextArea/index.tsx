import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.5;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #666;
  }
`;

function TextArea({ ...props }) {
  return <StyledTextArea {...props} />;
}

export default TextArea;
