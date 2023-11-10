import { getForecast } from '@/utils/getForecast';
import HomeButton from '../components/HomeButton';

type Props = {
  params : {
    location: string;
  }
}

export default async function Detail({ params } : Props) {
  const name = params.location === 'seoul' ? '서울' : '';

  // 이게 클라 컴포넌트 였으면 이렇게 API 호출 못한다.
  // 서버 컴포넌트이기 때문에 API 호출이 쉬워졌음
  const res = await getForecast(params.location);

  console.log(res);

  /**
   * Next.js 에서는 fetching의 결과값을 자동으로 캐싱한다. 그래서 언제 들어와도 처음 요청한 그 날짜 기준 3일 데이터를 가져온다.
   * 바꿔주려면 캐시를 비우거나 해야하는데 이 부분을 어케 해결할지 알아보자.
  */

  return (
    <div>
      <h1>{name}의 3일 예보</h1>

      <ul>
        {res.forecast.forecastday.map((day) => (
          <li key={day.date}>{day.date} / {day.day.avgtemp_c}</li>
        ))}
      </ul>

      <HomeButton />
    </div>
  );
}
