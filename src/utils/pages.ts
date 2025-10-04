export const getRowNumber = (total: number, current: number, limit: number) => (_: unknown, index: number) => total - current * limit - index;
