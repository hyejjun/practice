import useDispatch from '../hooks/useDispatch';
import useSelector from '../hooks/useSelector';

import { decrease, increase } from '../stores/Store';

export default function CountControl() {
  // 내가 액션 넘겨주길 원할때
  const dispatch = useDispatch();

  // 내가 상태를 얻기를 원할때
  const count = useSelector((state) => state.count);

  return (
    <div>
      <div>
        count:
        {count}
      </div>
      <button type="button" onClick={() => { dispatch(increase()); }}>Increase</button>
      <button type="button" onClick={() => { dispatch(increase(10)); }}>Increase 10</button>
      <button type="button" onClick={() => { dispatch(decrease()); }}>Decrease</button>
      <button type="button" onClick={() => { dispatch(decrease(10)); }}>Decrease 10</button>
    </div>
  );
}
