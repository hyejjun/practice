import useCounterStore from '../hooks/useCounterStore';

export default function Counter() {
  // 앞에가 state, 뒤에가 store
  // const [state, store] = useCounterStore();
  /*
		state에서는 안에 있는 상태값을 사용하고
		store에서는 action을 사용한다.
	*/

  // state 안에 있는 상태값을 부를때 이렇게 할 수 있다. (이렇게 많이 함)
  const [{ count }] = useCounterStore();

  return (
    <div>
      <div>
        count:
        {count}
      </div>
    </div>
  );
}
