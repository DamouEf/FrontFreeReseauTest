import { useMutation } from "react-query";
import { useFormik } from "formik";
import { createTicket } from "../api/tickets"

function TicketCreation() {
    const {
        data,
        error,
        isLoading,
        mutate,
    } = useMutation(createTicket, {
        onSuccess: (data) => {
            console.log("created !");
        }
    })

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            zone: '',
            priority: '',
        },
        onSubmit: (values) => mutate(values),
    })

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="zone">zone </label>
              <input
                id="zone"
                name="zone"
                type="zone"
                className="form-control"
                onChange={handleChange}
                value={values.zone}
              />
            </div>
            <div className="form-group">
              <label htmlFor="priority">priority </label>
              <input
                id="priority"
                name="priority"
                type="priority"
                className="form-control"
                onChange={handleChange}
                value={values.priority}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TicketCreation