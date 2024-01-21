import { RootState } from "./redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1 className="text-gray-800 text-3xl font-bold text-center">Tech net</h1>
      <div className="flex gap-4 justify-center mt-5">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-600 p-2 rounded-md"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="bg-green-600 p-2 rounded-md"
        >
          Increment By Amount
        </button>
        <h1 className="text-2xl">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 p-2 rounded-md"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
