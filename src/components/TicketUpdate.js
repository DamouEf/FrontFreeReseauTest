import { useMutation, useQuery } from "react-query";
import { useParams, useNavigate} from 'react-router-dom';
import { useFormik } from "formik";
import { getTicket, updateTicket } from "../api/tickets"

function TicketUpdate({ match }) {
  const { ticketId }  = useParams();
  const navigate = useNavigate();
  const {
    data: initialTicketData,
    error: initialTicketError,
    isLoading: initialTicketLoading,
  } = useQuery(["ticket", ticketId], () => getTicket(ticketId), {
    enabled: !!ticketId,
  });

  const {
    data: updatedTicketData,
    error: updatedTicketError,
    isLoading: updatedTicketLoading,
    mutate: updateTicketMutate,
  } = useMutation(updateTicket, {
    onSuccess: (data) => {
      console.log("updated!");
      navigate(`/tickets/`);
    },
  });

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      zone: initialTicketData?.zone || "",
      priority: initialTicketData?.priority || "",
    },
    onSubmit: (values) => updateTicketMutate({ id: ticketId, ...values }),
    enableReinitialize: true,
  });

  if (initialTicketLoading || updatedTicketLoading) {
    return <p>Loading...</p>;
  }

  if (initialTicketError) {
    return <p>{initialTicketError.message}</p>;
  }

  if (updatedTicketError) {
    return <p>{updatedTicketError.message}</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="zone">Zone</label>
              <input
                id="zone"
                name="zone"
                type="text"
                className="form-control"
                onChange={handleChange}
                value={values.zone}
              />
            </div>
            <div className="form-group">
              <label htmlFor="priority">Priority</label>
              <input
                id="priority"
                name="priority"
                type="text"
                className="form-control"
                onChange={handleChange}
                value={values.priority}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TicketUpdate;
