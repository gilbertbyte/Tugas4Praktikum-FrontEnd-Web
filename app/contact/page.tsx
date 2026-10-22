import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

const info = [
  { icon: "✉", label: "Email", value: "orionnebula123@gmail.com" },
  { icon: "☎", label: "Phone", value: "62 821 0593 2345" },
  { icon: "📍", label: "Studio", value: "Jl. Jatinegara Barat no 13, Jakarta Timur" },
];

export default function ContactPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 className="page-title">Let&apos;s talk about your next star.</h1>
          <p className="page-lead">Have a game idea, a project or a question? Send us a message and we will reply soon.</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-layout">
          <ul className="contact-info">
            {info.map((item) => (
              <li key={item.label}>
                <span className="contact-icon">{item.icon}</span>
                <div>
                  <strong>{item.label}</strong>
                  <p className="muted">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="card form-box">
            <h2>Send a message</h2>
            <p className="muted" style={{ margin: "4px 0 20px" }}>
              Tell us a little about your project.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
