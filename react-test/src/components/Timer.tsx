import { useEffect, useState } from 'react';

import { useBoolean, useCounter } from 'usehooks-ts';

function Timer() {
  useEffect(() => {
    const before = document.title;

    const id = setInterval(() => {
      document.title = `Now : ${new Date().getTime()}`;
    }, 100);

    return () => {
      document.title = before;
      clearInterval(id);
    };
  });

  return <div>go</div>;
}

export default function TimerControl() {
  // const [playing, setPlaying] = useState<boolean>(false);

  // const handleClick = () => {
  //   setPlaying(!playing);
  // };

  const { value: playing, toggle: togglePlaying } = useBoolean(false);

  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <div>
        <div>
          {count}
        </div>
        <button type="button" onClick={increment}>+</button>
        <button type="button" onClick={decrement}>-</button>
      </div>
      {
        playing
          ? <Timer />
          : <div>stop</div>
      }
      <button type="button" onClick={togglePlaying}>
        Toggle
      </button>
    </div>
  );
}
