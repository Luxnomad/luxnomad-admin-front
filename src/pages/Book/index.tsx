import styled from 'styled-components';

import PageTemplate from '@@components/PageTemplate';

import SearchedHotelInfoSection from './parts/SearchedHotelInfoSection';
import SearchHotelFilterSection from './parts/SearchHotelFilterSection';

const StyledBook = styled(PageTemplate)``;

function Book() {
  return (
    <StyledBook>
      <SearchHotelFilterSection />
      <SearchedHotelInfoSection />
    </StyledBook>
  );
}

export default Book;
