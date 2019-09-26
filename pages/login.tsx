import { useState, Fragment } from 'react';
import Meta from '../components/meta';

interface State {
  username: string;
  password: string;
}
const Login = () => {
  const [state, setState] = useState<State>({
    username: '',
    password: '',
  });
  const handleChange = (e: {
    target: { name: string; value: string };
  }) => {
    const {
      target: { name, value },
    } = e;
    setState({
      ...state,
      [name]: value,
    });
    console.log(name, value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
  };
  const { username, password } = state;
  return (
    <Fragment>
      <Meta />
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Login</button>
        </form>
        <style jsx>{`
          section {
            width: 100%;
            margin: 0 auto;
            height: 100%;
            display: flex;
          }
          form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 400px;
            height: 300px;
            margin: 0 auto;
            border-radius: 5px;
            color: white;
          }
          form > div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin: 0.3rem auto;
          }
          label {
            padding: 0.5rem;
          }
          input {
            padding: 0.7rem 0.2rem;
            width: 60%;
            border: none;
            border-radius: 5px;
            outline: none;
          }

          button {
            padding: 0.5rem 0.2rem;
            width: 70px;
            border: none;
            background: blue;
            border-radius: 5px;
            color: white;
            cursor: pointer;
            align-self: flex-start;
            margin-top: 10px;
            margin-left: 120px;
          }
          button:hover {
            background: var(--main-bg-color);
          }
        `}</style>
      </section>
    </Fragment>
  );
};

export default Login;
