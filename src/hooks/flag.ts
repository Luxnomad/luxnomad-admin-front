import { useState } from 'react';

import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';

export const useRequestFlag = (requestType: string) => {
  const [flag, setFlag] = useState(false);

  const actionKey = requestType.replace(/(.+)Request$/, '$1');

  useActionSubscribe({
    type: requestType,
    callback: () => {
      setFlag(true);
    },
  });

  useActionSubscribe({
    type: `${actionKey}Success`,
    callback: () => {
      setFlag(false);
    },
  });

  useActionSubscribe({
    type: `${actionKey}Failure`,
    callback: () => {
      setFlag(false);
    },
  });

  return flag;
};
