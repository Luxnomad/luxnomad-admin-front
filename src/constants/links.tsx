import { PropsWithChildren } from 'react';

import { Link as RLink } from 'react-router-dom';
import styled from 'styled-components';

import { PATH } from '@@constants/path';

const Link = styled(RLink)`
  color: #3f88a4;
  text-decoration: underline;
`;

export type DetailLinkProps = PropsWithChildren<{ id: string }>;

export function PlatformDetailLink({ id, children }: DetailLinkProps) {
  return <Link to={`${PATH.PLATFORM}/${id}`}>{children ?? id}</Link>;
}

export function ProductDetailLink({ id, children }: DetailLinkProps) {
  return <Link to={`${PATH.PRODUCT}/${id}`}>{children ?? id}</Link>;
}

export function MemberDetailLink({ id, children }: DetailLinkProps) {
  return <Link to={`${PATH.MEMBER}/${id}`}>{children ?? id}</Link>;
}

export function AdminDetailLink({ id, children }: DetailLinkProps) {
  return <Link to={`${PATH.ADMIN}/${id}`}>{children ?? id}</Link>;
}

export function OrderDetailLink({ id, children }: DetailLinkProps) {
  return <Link to={`${PATH.ORDER}/${id}`}>{children ?? id}</Link>;
}

export function OrderProductDetailLink({ id, children, orderCode }: DetailLinkProps & { orderCode: string }) {
  return <Link to={`${PATH.ORDER_PRODUCT}/${orderCode}/${id}`}>{children ?? id}</Link>;
}

export function PopupDetailLink({ id, children }: DetailLinkProps) {
  return <Link to={`${PATH.POPUP_MANAGEMENT}/${id}`}>{children ?? id}</Link>;
}

export function PostDetailLink({ id, children }: DetailLinkProps) {
  return <Link to={`${PATH.POST_MANAGEMENT}/${id}`}>{children ?? id}</Link>;
}
