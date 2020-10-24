import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 's-tooltip',
  buildEs5: 'prod',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
