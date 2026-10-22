import Button from "@/components/Button";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="container section center">
      <div style={{ marginBottom: 16 }}>
        <Logo size={90} uid="notfound" />
      </div>
      <h1>Page not found</h1>
      <p className="muted" style={{ margin: "12px 0 24px" }}>
        The page you are looking for does not exist.
      </p>
      <Button href="/">Back to Home</Button>
    </div>
  );
}
