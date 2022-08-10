import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';

const client = new ApolloClient({ 
  uri: 'http://localhost:4000/graphql', 
  cache: new InMemoryCache()
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Routes>
          <Route path="/" element={< App/>}>
            <Route index element={<SongList />} />
          </Route>
          <Route path="song/new" element={<SongCreate />} />
        </Routes>
      </HashRouter>
    </ApolloProvider>
  )
};

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<Root />);