import { PropsWithChildren } from 'react';

import { Link as RLink } from 'react-router-dom';
import styled from 'styled-components';

import { PATH } from './path';

const Link = styled(RLink)`
  color: #3f88a4;
  text-decoration: underline;
`;

export type DetailLinkProps = PropsWithChildren<{ id: string }>;

export function BookingHistoryDetailLink({ id, children }: DetailLinkProps) {
  return <Link to={`${PATH.BOOK_HISTORY}/${id}`}>{children ?? id}</Link>;
}
