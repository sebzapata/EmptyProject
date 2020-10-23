import React from 'react';
import './App.scss';


class App extends React.Component {

  componentDidMount(): void {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  render() {
    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    return (
      <div className="page">
        <h1>App</h1>
      </div>
    );
  }
}

export default App;
