import { POST_STATUS, POSTING_TYPE } from '@@stores/postManagement/constants';
import { asType } from '@@types/common';

export type PostStatus = asType<typeof POST_STATUS>;
export type PostingType = asType<typeof POSTING_TYPE>;

export interface PostList {
  id: string;
  postId: string;
  postTitle: string;
  availability: boolean;
  startDate: Date;
  endDate: Date;
  postingType?: PostingType;
  status: PostStatus;
}

export interface UpsertPostDTO {
  postId?: string;
  postTitle: string;
  postingType: PostingType;
  postingSchedule: string;
  postStartDate: string;
  postEndDate: string;
  postDescription: string;
  status?: PostStatus;
  images: File[];
}
