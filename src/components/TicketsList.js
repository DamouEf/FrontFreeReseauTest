import { useQuery, useMutation, queryCache } from "react-query";
import { useNavigate } from 'react-router-dom';
import { getTickets, deleteTicket } from "../api/tickets";

function TicketList() {
  const { data, error, isLoading } = useQuery("tickets", getTickets);
  const navigate = useNavigate();


  const deleteTicketMutation = useMutation(deleteTicket, {
    onSuccess: () => {
      navigate(0)
    },
  });

  const handleDelete = (ticketId) => {
    deleteTicketMutation.mutate(ticketId);
  };

  return (
    <div className="container">
      <button
        className="btn btn-success btn-sm"
        onClick={() => navigate("new")}
      >
        New
      </button>
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error.message}</p>
          ) : data ? (
            <ul className="list-group">
              {data.map((ticket) => (
                <li
                  key={ticket.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>{ticket.zone}</span>
                  <span className="badge bg-primary rounded-pill">
                    {ticket.priority}
                  </span>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(ticket.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => navigate(`/tickets/${ticket.id}`)}
                  >
                    Update
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default TicketList;
