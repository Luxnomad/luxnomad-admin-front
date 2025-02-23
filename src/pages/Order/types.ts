import { PageQuery } from '@@utils/request/types';

export interface OrderListQuery extends PageQuery {
  code?: string;
  memberCode?: string;
  from?: string;
  to?: string;
}
