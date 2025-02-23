import styled from 'styled-components';

import Flex from '@@components/Flex';
import { PageTemplateProps } from '@@components/PageTemplate/types';

const StyledPageTemplate = styled(Flex.Vertical)`
  height: 100%;
  border: 1px solid #ddd;

  &::-webkit-scrollbar {
    display: none;
  }

  .page_template__header {
    flex: 0 0 auto;
    min-height: 40px;
    padding: 5px 20px;
    background: #eee;
  }

  .page_template__body {
    flex: 1;
    padding: 20px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .page_template__footer {
    flex: 0 0 auto;
    min-height: 50px;
    padding: 5px 20px;
    border-top: 1px solid #ddd;
  }
`;

function PageTemplate({ headerContent, footerContent, children }: PageTemplateProps) {
  return (
    <StyledPageTemplate>
      {headerContent && (
        <Flex.Horizontal className='page_template__header' alignItems='center'>
          {headerContent}
        </Flex.Horizontal>
      )}
      <div className='page_template__body'>{children}</div>
      {footerContent && (
        <Flex.Horizontal
          className='page_template__footer
      '
        >
          {footerContent}
        </Flex.Horizontal>
      )}
    </StyledPageTemplate>
  );
}

export default PageTemplate;
