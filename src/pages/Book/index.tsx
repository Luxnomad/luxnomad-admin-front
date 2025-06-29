import styled from 'styled-components';

import PageTemplate from '@@components/PageTemplate';

import { useRoomSearch } from './hooks';
import SearchHotelFilterSection from './parts/SearchHotelFilterSection';

const StyledBook = styled(PageTemplate)``;

function Book() {
  const { data } = useRoomSearch();

  return (
    <StyledBook>
      <SearchHotelFilterSection />
    </StyledBook>
  );
}

export default Book;
