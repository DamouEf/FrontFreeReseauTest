import { useMutation } from "react-query";
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from "formik";
import { login } from "../api/login"
import { useAuth } from './AuthProvider';


function Authentication() {
  const navigate = useNavigate();
  const auth = useAuth();

  const {
    mutateAsync,
  } = useMutation(login)

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      const data = await mutateAsync(values)
      localStorage.setItem('access', data.access);
      auth.login();
      navigate(`tickets/`);
    },
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