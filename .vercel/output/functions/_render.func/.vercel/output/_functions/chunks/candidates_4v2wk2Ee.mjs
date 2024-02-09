export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/candidates_-S3sL_CY.mjs').then(n => n.c);

export { page };
