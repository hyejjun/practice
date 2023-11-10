/*
./src/app/error.tsx must be a Client Component.
Add the "use client" directive the top of the file to resolve this issue.

=> error.tsx 에러 컴포넌트는 반드시 client 컴포넌트여야 한다.
*/

'use client';

import { useEffect } from 'react';

type ErrorProps = {
  error: Error;
  reset: ()=>void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, []);

  return (
    <>
      <h1>에러 페이지</h1>
      <button type="button" onClick={() => { reset(); }}>새로고침</button>
    </>
  );
}
