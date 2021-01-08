import React, {useState, useEffect} from 'react';

function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch('/api/').then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(data => setState(data.names))
    return () => {
      
    }
  }, [])
  console.log(state);
  return (
    <div className="App">
      {state.length > 0 && state.map((item, idx) =>
        <li key={idx}>{item}</li>
      )}
    </div>
  );
}

export default App;
