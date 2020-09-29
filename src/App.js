import React from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <div className="grid gap-2">
        <div className="container">
          BANNER
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">

        <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
          <div className="flex-shrink-0">
            <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
          </div>
          <div className="ml-6 pt-1">
            <h4 className="text-xl text-gray-900 leading-tight">ChitChat</h4>
            <p className="text-base text-gray-600 leading-normal">You have a new message!</p>
          </div>
        </div>

        <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
          <div className="flex-shrink-0">
            <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
          </div>
          <div className="ml-6 pt-1">
            <h4 className="text-xl text-gray-900 leading-tight">ChitChat</h4>
            <p className="text-base text-gray-600 leading-normal">You have a new message!</p>
          </div>
        </div>

        <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
          <div className="flex-shrink-0">
            <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
          </div>
          <div className="ml-6 pt-1">
            <h4 className="text-xl text-gray-900 leading-tight">ChitChat</h4>
            <p className="text-base text-gray-600 leading-normal">You have a new message!</p>
          </div>
        </div>

        <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
          <div className="flex-shrink-0">
            <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
          </div>
          <div className="ml-6 pt-1">
            <h4 className="text-xl text-gray-900 leading-tight">ChitChat</h4>
            <p className="text-base text-gray-600 leading-normal">You have a new message!</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
