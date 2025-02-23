import { NavItem } from '@@components/SideMenu/types';
import { PATH } from '@@constants/path';
import { PAGES } from '@@constants/permissions';
import { USER_PERMISSION } from '@@constants/permissions';

export const navs: NavItem[] = [
  {
    title: '홈',
    path: PATH.HOME,
    iconName: 'home',
    page: PAGES.HOME,
  },
  {
    title: 'Admin 관리',
    path: PATH.ADMIN,
    iconName: 'supervisor_account',
    page: PAGES.ADMIN,
  },
  {
    title: '플랫폼 관리',
    path: PATH.PLATFORM,
    iconName: 'manage_accounts',
    page: PAGES.PLATFORM,
  },
  {
    title: '상품 관리',
    path: PATH.PRODUCT,
    iconName: 'inventory',
    page: PAGES.PRODUCT,
    children: [
      {
        title: '상품 목록',
        path: PATH.PRODUCT,
        iconName: 'list',
        page: PAGES.PRODUCT,
      },
      {
        title: '상품 생성',
        path: `${PATH.PRODUCT}/create`,
        iconName: 'add',
        page: PAGES.PRODUCT,
        permission: USER_PERMISSION.CREATE,
      },
    ],
  },
  {
    title: '게시 관리',
    path: PATH.POST_MANAGEMENT,
    iconName: 'dashboard',
    page: PAGES.POST_MANAGEMENT,
    children: [
      {
        title: '팝업 관리',
        path: PATH.POPUP_MANAGEMENT,
        iconName: 'open_in_new',
        page: PAGES.POPUP_MANAGEMENT,
      },
      {
        title: '공지사항 관리',
        path: PATH.POST_MANAGEMENT,
        iconName: 'mark_email_unread',
        page: PAGES.POST_MANAGEMENT,
      },
    ],
  },
  {
    title: '유저 관리',
    path: PATH.MEMBER,
    iconName: 'account_circle',
    page: PAGES.MEMBER,
    children: [
      {
        title: '유저 목록',
        path: PATH.MEMBER,
        iconName: 'list',
        page: PAGES.MEMBER,
      },
      {
        title: '유저 생성',
        path: `${PATH.MEMBER}/create`,
        iconName: 'add',
        page: PAGES.MEMBER,
      },
    ],
  },
  {
    title: '주문 관리',
    path: PATH.ORDER,
    iconName: 'shopping_cart',
    page: PAGES.ORDER,
    children: [
      {
        title: '주문 목록',
        path: PATH.ORDER,
        iconName: 'list',
        page: PAGES.ORDER,
      },
      {
        title: '주문 상품 목록',
        path: PATH.ORDER_PRODUCT,
        iconName: 'list',
        page: PAGES.ORDER_PRODUCT,
      },
    ],
  },
];
