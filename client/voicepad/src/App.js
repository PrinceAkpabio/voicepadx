import React, {useState, useEffect} from 'react';
import Speech from './components/speech';

function App() {
  const [state, setState] = useState([]);
  const [newdata, setNew] = useState([]);
  useEffect(() => {
    fetch('/api/').then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(data => setState(data.names))
    return () => {
      
    }
  }, [])
  useEffect(() => {
    fetch('/datt/').then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(data => setNew(data.hello))
    return () => {
      
    }
  }, [])
  console.log(state);
  console.log(newdata);
  return (
    <div className="App">
      {state.length > 0 && state.map((item, idx) =>
        <li key={idx}>{item}</li>
      )}
      {newdata}
      <Speech/>
    </div>
  );
}

export default App;
