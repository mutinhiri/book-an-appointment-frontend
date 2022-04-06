import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './Home';
import { getDoctors } from './api/doctors';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctors);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
