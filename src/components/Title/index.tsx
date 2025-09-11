import styled from 'styled-components';

import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const Title = styled(Typography.Subtitle1)`
  color: ${COLORS.GRAY_SCALE_80};
  margin-bottom: 20px;
`;

export default Title;
