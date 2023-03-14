import { useEffect } from 'react';
import useSelector from '../hooks/useSelector';

export default function NameCard() {
  const name = useSelector((state) => state.name);

  useEffect(() => {
  // 단일 스토어라서 count의 변화에도 상태 변화를 인지해서 NameCard 컴포넌트도 새로그려줌
    // 그래서 useSelector 에서 작업을 해준다.
    console.log('render NameCard');
  });

  return (
    <div>
      <div>
        name:
        {name}
      </div>
    </div>
  );
}
