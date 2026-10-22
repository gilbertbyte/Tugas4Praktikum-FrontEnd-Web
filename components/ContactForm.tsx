"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="success">
        <h3>Message sent! 🚀</h3>
        <p className="muted">Thanks, {name}. We will reply to {email} soon.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
      </label>
      <label>
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
      </label>
      <label>
        Message
        <textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your project..." required />
      </label>
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
}
