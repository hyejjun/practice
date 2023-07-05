import { useSalmon, useTuna, resetAllStores } from '../../store/FishStore';

export default function FishCounter() {
  const salmon = useSalmon((state) => state.salmon);
  const addSalmon = useSalmon((state) => state.addSalmon);
  const resetSalmon = useSalmon((state) => state.resetSalmon);

  const tuna = useTuna((state) => state.tuna);
  const addTuna = useTuna((state) => state.addTuna);
  const resetTuna = useTuna((state) => state.resetTuna);

  return (
    <div className="App">
      {salmon}
      {' '}
      <button type="button" onClick={() => addSalmon(1)}>
        Add Salmon
      </button>
      <hr />
      {tuna}
      {' '}
      <button type="button" onClick={() => addTuna(1)}>
        Add Tuna
      </button>
      <hr />
      <button type="button" onClick={() => resetSalmon()}>
        Reset Salmon Slice
      </button>
      <button type="button" onClick={() => resetTuna()}>
        Reset Tuna Slice
      </button>
      <button type="button" onClick={() => resetAllStores()}>
        Reset All Slices
      </button>
    </div>
  );
}
