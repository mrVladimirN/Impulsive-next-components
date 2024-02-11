// eslint-disable-next-line no-restricted-exports
export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/examples/firebase/chat', '/examples/firebase/chat/:id*', '/examples/firebase/register']
};
