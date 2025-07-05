import useSearch from '@@hooks/useSearch';
import { RoomSearchRequest, RoomSearchResponse } from '@@stores/book/types';
import { useSWRDetail } from '@@utils/request/hooks';

export const useRoomSearch = () => {
  const query = useSearch<RoomSearchRequest>();

  const skip = !query.adultCount || !query.chainCode || !query.propertyCode || !query.checkIn || !query.checkOut;

  const { data } = useSWRDetail<RoomSearchResponse>(`/admin/hotel/search`, {
    query,
    skip,
  });

  return { data: data?.data };
};
