import BaseFlex from '@@components/Flex/BaseFlex';
import { FLEX_DIRECTION } from '@@components/Flex/constants';

const Flex = {
  [FLEX_DIRECTION.HORIZONTAL]: BaseFlex(FLEX_DIRECTION.HORIZONTAL),
  [FLEX_DIRECTION.VERTICAL]: BaseFlex(FLEX_DIRECTION.VERTICAL),
};

export default Flex;
