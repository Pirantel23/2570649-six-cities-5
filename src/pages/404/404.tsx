import { Link } from 'react-router-dom';

export default function PageNotFound(): JSX.Element {
  return (
    <section>
      <h1>404 Page not found</h1>
      <Link to="/">Return to home page</Link>
    </section>
  );
}
