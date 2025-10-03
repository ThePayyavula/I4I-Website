import React, { useState } from "react";

type Form = { name: string; email: string; message: string };

export default function Contact() {
  const [form, setForm] = useState<Form>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO(Contact): integrate backend or Formspree/Resend/SES
    setSubmitted(true);
  };

  if (submitted) return <p>Thanks! We’ll reply to <b>{form.email}</b>.</p>;

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Contact Us</h1>
      {/* TODO(Contact): validation, loading state, error handling */}
      <form onSubmit={onSubmit} className="space-y-4">
        <input className="w-full rounded-lg border px-3 py-2" name="name" placeholder="Name" value={form.name} onChange={onChange} />
        <input className="w-full rounded-lg border px-3 py-2" name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} />
        <textarea className="w-full h-32 rounded-lg border px-3 py-2" name="message" placeholder="Message" value={form.message} onChange={onChange} />
        <button className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50" type="submit">Send</button>
      </form>
    </section>
  );
}
