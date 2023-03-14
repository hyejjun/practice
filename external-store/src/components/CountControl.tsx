import useCounterStore from '../hooks/useCounterStore';

export default function CountControl() {
  // 앞에 state 값은 생략도 가능하다.
  const [, store] = useCounterStore();

  // state.count를 바로 꺼내와서 쓰기
  // const [{ count }, store] = useCounterStore();

  return (
    <div>
      <div>
        count:
        {store.count}
      </div>
      <button type="button" onClick={() => { store.increase(); }}>
        Increase
      </button>
      <button type="button" onClick={() => { store.increase(10); }}>
        Increase 10
      </button>
      <button type="button" onClick={() => { store.decrease(); }}>
        Decrease
      </button>
      <button type="button" onClick={() => { store.decrease(10); }}>
        Decrease 10
      </button>
    </div>
  );
}
