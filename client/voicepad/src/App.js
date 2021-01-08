import React, {useState, useEffect} from 'react';

function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch('/api/').then(res => {
      res.json()
    })
    return () => {
      
    }
  }, [])
  console.log(state);
  return (
    <div className="App">
      {state}
      <h1>HELLO</h1>
    </div>
  );
}

export default App;
