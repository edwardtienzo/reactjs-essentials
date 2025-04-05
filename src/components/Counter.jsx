import { useState } from 'react'

import '../css/Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    )
}