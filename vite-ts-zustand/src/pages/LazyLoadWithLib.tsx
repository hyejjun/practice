/* eslint-disable react/no-array-index-key */

import LazyLoad from 'react-lazyload';

import LazyBox from '@components/lazy/LazyBox';

import PlaceholderComponent from '@components/lazy/PlaceholderComponent';

export default function LazyLoadWithLib() {
  return (
    <div className="list">

      {[...Array(1000)].map((val, index) => (
        <LazyLoad
          height={200}
          once
          key={index}
          placeholder={<PlaceholderComponent />}
        >
          <LazyBox />
        </LazyLoad>
      ))}

    </div>
  );
}
