import { useState, ChangeEventHandler } from 'react';

import { useFormikContext } from 'formik';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import FormGroup from '@@components/FormGroup';
import ImageBox from '@@components/ImageBox';
import { FormDataType } from '@@components/ImageForm/types';
import { COLORS } from '@@constants/colors';

const StyledImageForm = styled(FormGroup)``;

const StyledInput = styled.label`
  font-size: 12px;
  border-radius: 4px;
  color: ${COLORS.GRAY_SCALE_90};
  background: ${COLORS.GRAY_SCALE_05};
  padding: 4px 8px;

  &.disabled {
    opacity: 0.7;
  }
`;

function ImageForm() {
  const { values, setFieldValue } = useFormikContext<FormDataType>();
  const [imageURLs, setImageURLs] = useState<string[]>([]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFieldValue('images', values.images.concat(file));
      setImageURLs((prevURLs) => [...prevURLs, URL.createObjectURL(file)]);
    }
  };

  const handleDelete = (index: number) => {
    const updatedImages = values.images.filter((_, i) => i !== index);
    setFieldValue('images', updatedImages);
    setImageURLs(imageURLs.filter((_, i) => i !== index));
  };

  return (
    <StyledImageForm>
      <Flex.Vertical alignItems='flex-start' gap={4}>
        <StyledInput className={values.images.length >= 3 ? 'disabled' : ''}>
          이미지 업로드
          <input type='file' hidden onChange={handleChange} accept='image/*' disabled={values.images.length >= 3} />
        </StyledInput>
        <Flex.Horizontal gap={12}>
          {imageURLs.map((url, index) => (
            <ImageBox key={index} imageUrl={url} size={80} onDelete={() => handleDelete(index)} />
          ))}
        </Flex.Horizontal>
      </Flex.Vertical>
    </StyledImageForm>
  );
}

export default ImageForm;
