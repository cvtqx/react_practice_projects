import { usePersistedState } from '../../hooks/usePersistedState';

export default function CounterWithLocalStorage() {
 const [count, setCount] = usePersistedState('count', 0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick = {() => setCount(count+1)}>Increment</button>
    </div>
  )
}