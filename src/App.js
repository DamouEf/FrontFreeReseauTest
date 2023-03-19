import './App.css';
import Authentication from './components/Authentication';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QueryClientProvider client={queryClient}>
          <Authentication />
        </QueryClientProvider>
      </header>
    </div>
  );
}

export default App;
