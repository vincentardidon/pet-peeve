import { Link } from "react-router-dom";
import { ArrowLeft, PawPrint } from "lucide-react";

function NotFound() {
  return (
    <main className="not-found">
      <PawPrint size={48} />

      <h1>Oops! Wrong paw trail.</h1>

      <p>The page you're looking for doesn't exist.</p>

      <Link to="/" className="primary-button">
        <ArrowLeft size={17} />
        Return home
      </Link>
    </main>
  );
}

export default NotFound;