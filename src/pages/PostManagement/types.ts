import { PostStatus } from '@@stores/postManagement/types';
import { PageQuery } from '@@utils/request/types';

export interface PostListQuery extends PageQuery {
  postId?: string;
  postName?: string;
  status?: PostStatus;
}
