import PageTemplate from '@@components/PageTemplate';

function PermissionDenied() {
  return (
    <PageTemplate>
      <h2>페이지 권한이 없습니다.</h2>
      <h2>관리자에게 문의하세요.</h2>
    </PageTemplate>
  );
}

export default PermissionDenied;
