import { HotelSearchResponse } from '@@stores/book/types';

import { authenticatedRequest } from './request';

export const searchHotel = (keyword: string): Promise<HotelSearchResponse[]> =>
  authenticatedRequest.get(`/admin/hotel/search/internal?keyword=${keyword}`).then((v) => v.data.body.hotels);
