import styled from 'styled-components';

import PageTemplate from '@@components/PageTemplate';

import SearchHotelFilterSection from './parts/SearchHotelFilterSection';

const StyledBook = styled(PageTemplate)``;

function Book() {
  return (
    <StyledBook>
      <SearchHotelFilterSection />
    </StyledBook>
  );
}

export default Book;
