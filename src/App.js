import './App.css';
import Authentication from './components/Authentication';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import TicketList from './components/TicketsList';
import TicketCreation from './components/TicketsCreation';
import TicketUpdate from './components/TicketUpdate'
const queryClient = new QueryClient();



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="tickets" element={<TicketList />} />
      <Route path="tickets/new" exact element={<TicketCreation />} />
      <Route path="tickets/:ticketId" element={<TicketUpdate />} />
      <Route path="/" element={<Authentication />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QueryClientProvider client={queryClient}>
         <RouterProvider router={router} />
        </QueryClientProvider>
      </header>
    </div>
  );
}

export default App;
