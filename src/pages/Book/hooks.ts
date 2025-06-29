import useSearch from '@@hooks/useSearch';
import { RoomSearchRequest, RoomSearchResponse } from '@@stores/book/types';
import { useSWRList } from '@@utils/request/hooks';

export const useRoomSearch = () => {
  const query = useSearch<RoomSearchRequest>();

  const skip = !query.adultCount || !query.keyword || !query.checkInDate || !query.checkOutDate;

  const { data } = useSWRList<RoomSearchResponse[]>(`/admin/hotel/search`, {
    query,
    config: {
      skip,
    },
  });

  return { data };
};
