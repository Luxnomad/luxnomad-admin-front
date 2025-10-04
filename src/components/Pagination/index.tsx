import { Pagination as MUIPagination } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import Flex from '@@components/Flex';

function Pagination({ current, lastPage, onChange }: { current: number; lastPage: number; onChange?: (page: number) => void }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (value: number) => {
    searchParams.set('page', String(value));
    setSearchParams(searchParams);
  };

  return (
    <Flex.Horizontal className='tw-pt-[20px]' justifyContent='center'>
      <MUIPagination
        count={lastPage}
        page={current + 1}
        onChange={(_, value) => {
          const newValue = value - 1;

          if (onChange) {
            onChange(newValue);
          } else {
            handleChange(newValue);
          }
        }}
      />
    </Flex.Horizontal>
  );
}

export default Pagination;
