import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Rotas from './rotas';
import AbApolloClient from './componentes/AbApolloClient';

const queryClient = new QueryClient()

function App() {
  return (
    <AbApolloClient>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Rotas />
        </BrowserRouter>
      </QueryClientProvider>
    </AbApolloClient>
  );
}

export default App;
