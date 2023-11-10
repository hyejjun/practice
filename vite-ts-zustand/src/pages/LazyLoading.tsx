/* eslint-disable react/no-array-index-key */
import LazyImage from '@components/lazy/LazyImage';

export default function LazyLoading() {
  return (
    <div>
      {[...Array(1000)].map((val, index) => (
        <LazyImage key={index} src="https://blog.kakaocdn.net/dn/ck83td/btrcwxeJJm6/ugdgkwZcq1YTnNEnksZ4z1/img.jpg" />
      ))}
    </div>
  );
}
