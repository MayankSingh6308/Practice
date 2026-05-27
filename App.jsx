import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Hello Mayank 🚀</h1>

      <p>Your React app is working successfully.</p>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          cursor: 'pointer',
          borderRadius: '10px',
          border: 'none',
        }}
      >
        Count is {count}
      </button>
    </div>
  )
}

export default App