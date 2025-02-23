import { useParams } from 'react-router-dom';

import { showErrorToast, showSuccessToast } from '@@components/Toast';
import useSearch from '@@hooks/useSearch';
import MemberForm from '@@pages/Member/Form';
import { useMemberDetail, useMemberList } from '@@pages/Member/hooks';
import { EditMemberForm, MemberListQuery } from '@@pages/Member/types';
import { sanitizeEditMemberForm } from '@@pages/Member/utils';
import { dispatch } from '@@store';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { updateMemberFailure, updateMemberRequest, updateMemberSuccess } from '@@stores/member/reducer';

function MemberDetail() {
  const { id } = useParams();
  const query = useSearch<MemberListQuery>();

  const { data } = useMemberDetail(id);
  const { mutate } = useMemberList(query);

  const initialValues: EditMemberForm = {
    code: data?.code ?? '',
    id: data?.id ?? '',
    name: data?.name ?? '',
    tel: data?.tel ?? '',
    email: data?.email ?? '',
    platformId: data?.platformId ?? '',
    platformName: data?.platformName ?? '',
    status: data?.status ?? 'ENABLE',
    createDatetime: data?.createDatetime ?? '',
  };

  const handleSubmit = (form: EditMemberForm) => {
    dispatch(updateMemberRequest(sanitizeEditMemberForm(form)));
  };

  useActionSubscribe({
    type: updateMemberSuccess.type,
    callback: () => {
      showSuccessToast('유저 정보 수정이 완료되었습니다.');
      mutate();
    },
  });

  useActionSubscribe({
    type: updateMemberFailure.type,
    callback: ({ payload }: ReturnType<typeof updateMemberFailure>) => {
      showErrorToast(payload);
    },
  });

  if (!data) return <div>Loading...</div>;

  return <MemberForm formType='update' initialValues={initialValues} onSubmit={handleSubmit} />;
}

export default MemberDetail;
