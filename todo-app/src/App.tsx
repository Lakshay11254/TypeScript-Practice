import React from 'react';
import './App.css';
import InputField from './component/InputField';

const App: React.FC = () => {
  return (
    <div className="App">
      <span className='heading'>Todo List</span>
      <InputField/>
    </div>
  );
}

export default App;
