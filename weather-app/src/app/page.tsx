import Link from 'next/link';

import { getCurrentWeather } from '@/utils/getCurrentWeather';

import style from './style.module.css';

export default async function Home() {
  const res = await getCurrentWeather('Seoul');
  console.log(res);

  return (
    <div>
      <h1>날씨 앱</h1>
      <ul className={style.list}>
        <li>
          <Link href="/seoul">서울</Link>
        </li>
        <li>
          <Link href="/newyork">뉴욕</Link>
        </li>
        <li>
          <Link href="/london">런던</Link>
        </li>
      </ul>
    </div>
  );
}
