import { useAppState } from '@@store/hooks';
import { ADMIN_MEMBER_TYPE } from '@@stores/auth/constants';

export const useIsSystemAdmin = () => {
  const type = useAppState((state) => state.auth.type);

  return type === ADMIN_MEMBER_TYPE.ADMIN;
};
