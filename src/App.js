import React from 'react';
import TheDate from './state/TheDate';
import Counter from './state/Counter';

class App extends React.Component {
  render() {
    return (
      <main className='App'>
        <TheDate />
        <Counter count={123} step={1}/>
      </main>
    )
  }
}

export default App;