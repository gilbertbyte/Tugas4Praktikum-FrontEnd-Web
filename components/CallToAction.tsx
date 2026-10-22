import Button from "@/components/Button";

type CallToActionProps = {
  title?: string;
  text?: string;
};

export default function CallToAction({
  title = "Ready to start your project?",
  text = "Tell us about your idea and we will help you build, design and launch it.",
}: CallToActionProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <h2>{title}</h2>
          <p className="muted">{text}</p>
          <Button href="/contact">Get in Touch</Button>
        </div>
      </div>
    </section>
  );
}
