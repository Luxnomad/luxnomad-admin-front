import { mixed, number, object, ref, string, array } from 'yup';

import { ALL_USER_PERMISSION } from '@@constants/permissions';
import { ADMIN_MEMBER_TYPE } from '@@stores/auth/constants';
import { AdminMemberType } from '@@stores/auth/types';

export const platformSchema = object({
  id: string().required('플랫폼 아이디를 입력해주세요'),
  name: string().required('플랫폼명을 입력해주세요'),
  ownerName: string().required('대표자명을 입력해주세요'),
  companyName: string().required('회사명을 입력해주세요'),
  companyTel: string().required('회사 대표번호를 입력해주세요'),
  registrationNumber: string().required('사업자 등록번호를 입력해주세요'),
  companyAddress: string().required('회사 주소를 입력해주세요'),
  companyEmail: string().required('회사 대표 이메일을 입력해주세요'),
});

export const productSchema = object({
  // 필수값: 상품명, 상품 가격, 서비스, 상품 상태
  // 선택값: 상품 설명, 상세 설명, 썸네일URL, 키워드
  name: string().required('상품명을 입력해주세요'),
  price: number().min(10, '상품 가격은 10원 이상이어야 합니다.').required('상품 가격을 입력해주세요.'),
  status: string().required('상품 상태를 선택해주세요.'),
  desc: string().nullable(),
  note: string().nullable(),
  memberCode: string().required('상품 등록자 아이디를 입력해주세요'),
  keyword: string().nullable(),
  // productThumbnailUrl: string().nullable(),
});

export const popupSchema = object({
  popupTitle: string().required('제목을 입력해주세요'),
  popupStatus: string().nullable(),
  popupDescription: string().nullable(),
  popupStartDate: string().required('시작일을 선택해주세요'),
  popupEndDate: string()
    .nullable()
    .test('end-date-validation', '종료일은 시작일보다 뒤여야 합니다.', function (value) {
      const { popupStartDate } = this.parent;
      if (!popupStartDate || !value) return true;
      return new Date(value) >= new Date(popupStartDate);
    }),
});

export const postSchema = object({
  postTitle: string().required('제목을 입력해주세요'),
  postStatus: string().nullable(),
  postDescription: string().nullable(),
  postingType: string().required('게시방법을 선택해주세요'),
  postingSchedule: string()
    .required('게시 일정을 선택해주세요')
    .test('schedule-match-start', '게시 일정과 게시기간의 시작일이 같아야 합니다.', function (value) {
      const { postStartDate } = this.parent;
      if (!postStartDate || !value) return true;
      return value === postStartDate;
    }),
  postStartDate: string().required('시작일을 선택해주세요'),
  postEndDate: string()
    .nullable()
    .test('end-date-validation', '종료일은 시작일보다 뒤여야 합니다.', function (value) {
      const { postStartDate } = this.parent;
      if (!postStartDate || !value) return true;
      return new Date(value) >= new Date(postStartDate);
    }),
});

export const memberSchema = object({
  id: string().when('formType', ([formType], schema) => {
    if (formType === 'create') {
      return schema.required('아이디를 입력해주세요.');
    }
    return schema;
  }),
  name: string().required('유저명을 입력해주세요.'),
  tel: string().required('연락처를 입력해주세요.'),
  email: string().required('이메일을 입력해주세요.'),
  password: string().when('formType', ([formType], schema) => {
    if (formType === 'create') {
      return schema.required('비밀번호를 입력해주세요.');
    }
    return schema;
  }),
  passwordCheck: string()
    .when('password', ([password], schema) => {
      if (password) {
        return schema.required('비밀번호를 한번 더 입력해주세요.');
      }
      return schema;
    })
    .oneOf([ref('password')], '비밀번호가 일치하지 않습니다.'),
  platformId: string().when('formType', ([formType], schema) => {
    if (formType === 'create') {
      return schema.required('플랫폼을 선택해주세요.');
    }
    return schema;
  }),
  status: string().when('formType', ([formType], schema) => {
    if (formType === 'update') {
      return schema.required('상품 상태를 선택해주세요.');
    }
    return schema;
  }),
});

export const adminSchema = object({
  id: string().when('formType', ([formType], schema) => {
    if (formType === 'update') {
      return schema.required('아이디를 입력해주세요.');
    }
    return schema;
  }),
  email: string().required('이메일을 입력해주세요.'),
  name: string().required('이름을 입력해주세요.'),
  password: string().when('formType', ([formType], schema) => {
    if (formType === 'create') {
      return schema.required('비밀번호를 입력해주세요.');
    }
    return schema;
  }),
  passwordCheck: string()
    .when('password', ([password], schema) => {
      if (password) {
        return schema.required('비밀번호를 한번 더 입력해주세요.');
      }
      return schema;
    })
    .oneOf([ref('password')], '비밀번호가 일치하지 않습니다.'),
  type: mixed<AdminMemberType>().oneOf(Object.values(ADMIN_MEMBER_TYPE), '올바른 타입을 선택해주세요.'),
  permission: array(string().oneOf(ALL_USER_PERMISSION, { message: '올바르지 않은 권한입니다.' })).min(1, '권한을 최소 한개 이상 선택해주세요.'),
  platformId: string(),
});

export const memoSchema = object({
  memo: string().required('Memo content is required field.'),
});
