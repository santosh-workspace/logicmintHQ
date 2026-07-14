"use client";
import { FormEvent, useState } from "react";

type Errors = { name?: boolean; email?: boolean; message?: boolean };

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", service: "Website Design & Development", message: "" });

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: false }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const er: Errors = {
      name: values.name.trim().length < 2,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()),
      message: values.message.trim().length < 5,
    };
    setErrors(er);
    if (er.name || er.email || er.message) return;
    // TODO: send `values` to your backend / form service here
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setValues({ name: "", email: "", service: "Website Design & Development", message: "" });
    }, 5200);
  };

  return (
    <section id="contact" style={{ paddingTop: 20 }}>
      <div className="wrap contact-grid">
        <div>
          <div className="kicker rv">Contact</div>
          <h2 className="h2 rv">
            Let&apos;s build something <span className="grad-text">intelligent</span>
          </h2>
          <p className="lede rv">Book a free consultation — we&apos;ll respond within one business day.</p>
          <div className="contact-ways rv">
            <a className="way" href="mailto:logicminthq@gmail.com">
              <div className="wi">✉</div>
              <div><b>logicminthq@gmail.com</b><span>Email us anytime</span></div>
            </a>
            <a className="way" href="https://wa.me/918956467676" target="_blank" rel="noopener noreferrer">
              <div className="wi">✆</div>
              <div><b>Chat on WhatsApp</b><span>Fastest response</span></div>
            </a>
            <a className="way" href="#contact">
              <div className="wi">📅</div>
              <div><b>Book a strategy call</b><span>30 min · free · no pitch</span></div>
            </a>
          </div>
        </div>

        <form className="cform rv" onSubmit={submit} noValidate>
          <div className={`fld ${errors.name ? "err" : ""}`}>
            <label htmlFor="fName">Your name</label>
            <input id="fName" type="text" autoComplete="name" placeholder="Jane Smith" value={values.name} onChange={set("name")} required />
            <span className="emsg">Please enter your name.</span>
          </div>
          <div className={`fld ${errors.email ? "err" : ""}`}>
            <label htmlFor="fEmail">Email address</label>
            <input id="fEmail" type="email" autoComplete="email" placeholder="jane@company.com" value={values.email} onChange={set("email")} required />
            <span className="emsg">Please enter a valid email.</span>
          </div>
          <div className="fld">
            <label htmlFor="fSvc">What do you need?</label>
            <select id="fSvc" value={values.service} onChange={set("service")}>
              <option>Website Design & Development</option>
              <option>AI Chatbot</option>
              <option>AI Voice Agent</option>
              <option>Workflow / CRM Automation</option>
              <option>API Integrations</option>
              <option>AI Consulting</option>
              <option>Something else</option>
            </select>
          </div>
          <div className={`fld ${errors.message ? "err" : ""}`}>
            <label htmlFor="fMsg">Tell us about your project</label>
            <textarea id="fMsg" placeholder="Goals, timeline, current tools…" value={values.message} onChange={set("message")} required />
            <span className="emsg">A few words help us prepare.</span>
          </div>
          <button type="submit" className="btn btn-primary magnetic" style={{ width: "100%", justifyContent: "center" }}>
            Send Message <span className="arr">→</span>
          </button>

          <div id="formSuccess" className={success ? "show" : ""} aria-live="polite">
            <div>
              <div className="checkwrap">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M9 21l8 8L32 13" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 style={{ marginBottom: 8 }}>Message received!</h3>
              <p style={{ color: "var(--sub)", fontSize: 14.5 }}>We&apos;ll get back to you within one business day.</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
