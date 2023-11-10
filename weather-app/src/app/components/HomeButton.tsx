// 서버 컴포넌트는 onClick - 클릭 이벤트 사용 불가하여 use client 클라이언트 컴포넌트로 변경함
// 이 컴포넌트를 사용하는 컴포넌트는 서버 컴포넌트 그려도 무방함
// 클라이언트 컴포넌트는 최대한 말단으로 보내는 것 => 이렇게해서 detail 페이지가 무작정 client 컴포넌트가 되는것을 막았다.

'use client';

import { useRouter } from 'next/navigation';

export default function HomeButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };
  return (
    <button type="button" onClick={handleClick}>홈으로</button>

  );
}
