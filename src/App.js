import './App.css';
import Authentication from './components/Authentication';
import RequiredAuth from './components/RequiredAuth';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  Routes,
  Route,
} from "react-router-dom";
import TicketList from './components/TicketsList';
import TicketCreation from './components/TicketsCreation';
import TicketUpdate from './components/TicketUpdate'
import { useAuth } from './components/AuthProvider'

const queryClient = new QueryClient();


const App = () => {
  const { logout, isConnected } = useAuth();
  console.log(isConnected)

  return (
    <div className="App">
      <header className="App-header"> 
        <QueryClientProvider client={queryClient}>
          {isConnected ? <button onClick={logout} className="btn btn-warning" >Logout</button> : null}
         <Routes>
          <Route path="tickets" element={<RequiredAuth><TicketList /></RequiredAuth>} />
          <Route path="tickets/new" exact element={<RequiredAuth><TicketCreation /></RequiredAuth>} />
          <Route path="tickets/:ticketId" element={<RequiredAuth><TicketUpdate /></RequiredAuth>} />
          <Route path="/" element={<Authentication />} />
         </Routes>
        </QueryClientProvider>
      </header>
    </div>
  );
};

export default App;
