import { format } from 'date-fns';
import { Outlet, useNavigate } from 'react-router-dom';

import Button from '@@components/Button';
import Dropdown from '@@components/Dropdown';
import Flex from '@@components/Flex';
import PageTemplate from '@@components/PageTemplate';
import Pagination from '@@components/Pagination';
import Table from '@@components/Table';
import { PopupDetailLink } from '@@constants/links';
import { PATH } from '@@constants/path';
import { CheckedListProvider } from '@@context/CheckedListContext';
import { usePopupList } from '@@pages/PopupManagement/dummy';
import PopupListFilter from '@@pages/PopupManagement/parts/PopupListFilter';

function PopupManagement() {
  const navigate = useNavigate();
  const { data, page } = usePopupList({
    id: '',
    popupId: '',
    popupTitle: '',
    displayOrder: 0,
    status: 'use',
    popupStartDate: new Date(),
    popupEndDate: new Date(),
  });

  const handleNewPopup = () => {
    navigate(`${PATH.POPUP_MANAGEMENT}/create`);
  };

  return (
    <CheckedListProvider defaultValue={[]}>
      <PageTemplate headerContent={'팝업 관리'}>
        <PopupListFilter />
        <Flex.Horizontal gap={12}>
          <Button onClick={handleNewPopup}>신규</Button>
          <Button>삭제</Button>
          <Dropdown
            options={[
              { label: '사용', value: 'enable' },
              { label: '비사용', value: 'disable' },
            ]}
          />
        </Flex.Horizontal>

        <Table
          columns={[
            {
              name: 'id',
              title: 'No',
            },
            {
              name: 'popupId',
              title: '팝업 ID',
              renderContent: ({ popupId }) => <PopupDetailLink id={popupId} />,
            },
            {
              name: 'popupTitle',
              title: '제목',
            },
            {
              name: 'displayOrder',
              title: '노출순서',
            },
            {
              name: 'status',
              title: '사용여부',
              renderContent: ({ status }) => (status === 'use' ? '사용' : '미사용'),
            },
            {
              name: 'startDate',
              title: '게시기간',
              renderContent: ({ popupStartDate, popupEndDate }) => `${format(popupStartDate, 'yyyy.MM.dd')} ~ ${format(popupEndDate, 'yyyy.MM.dd')}`,
            },
          ]}
          rows={data ?? []}
          checkbox
          idKey='id'
          fallbackContent='Empty Data...'
        />
        <Pagination current={page.current} lastPage={page.lastPage} />
        <Outlet />
      </PageTemplate>
    </CheckedListProvider>
  );
}

export default PopupManagement;
