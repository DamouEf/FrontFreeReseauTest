import { useMutation } from "react-query";
import { useFormik } from "formik";
import { login } from "../api/login"
import { useNavigate } from 'react-router-dom';

function Authentication() {
  const navigate = useNavigate();

  const {
    mutate,
  } = useMutation(login, {
    onSuccess: (data) => {
      localStorage.setItem('access', data.access);
      navigate(`/tickets/`);
    }
  })

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => mutate(values),
  })

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username </label>
              <input
                id="username"
                name="username"
                type="username"
                className="form-control"
                onChange={handleChange}
                value={values.username}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password </label>
              <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                onChange={handleChange}
                value={values.password}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Authentication