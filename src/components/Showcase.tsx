"use client";
import { useEffect, useRef, useState } from "react";

type Tab = "chat" | "voice" | "flow" | "ana";

const TABS: { id: Tab; label: string }[] = [
  { id: "chat", label: "💬 Chatbot" },
  { id: "voice", label: "🎙 Voice" },
  { id: "flow", label: "⚙ Workflow" },
  { id: "ana", label: "📈 Analytics" },
];

const SCRIPT: { who: "user" | "bot"; t: string }[] = [
  { who: "user", t: "Hi! Do you build AI voice agents for clinics?" },
  { who: "bot", t: "Absolutely! We deploy HIPAA-conscious voice agents that book appointments, answer FAQs, and route urgent calls — live in ~3 weeks. 🩺" },
  { who: "user", t: "What would that cost roughly?" },
  { who: "bot", t: "Most clinic deployments start around a fixed monthly plan based on call volume. Want me to book a free 30-min consultation to scope yours?" },
  { who: "user", t: "Yes, Thursday works." },
  { who: "bot", t: "Done ✅ Thursday 2:00 PM booked. Calendar invite is on its way!" },
];

const CAPS: { speaker: string; text: string }[] = [
  { speaker: "Caller", text: "Hi, I'd like to reschedule my appointment." },
  { speaker: "Agent", text: "Of course! I can see Thursday at 2 PM is open — shall I confirm?" },
  { speaker: "Caller", text: "Perfect, thank you!" },
  { speaker: "Agent", text: "All set. You'll receive a confirmation text shortly. 👋" },
];

const NODES = [
  { icon: "⬡", title: "Lead Captured", sub: "Webform / Chat" },
  { icon: "✦", title: "AI Enrichment", sub: "Score & segment" },
  { icon: "⇄", title: "CRM Sync", sub: "HubSpot / Salesforce" },
  { icon: "✉", title: "Smart Outreach", sub: "Personalized in 60s" },
];

const BARS = [
  { h: 38, d: "Mon" }, { h: 52, d: "Tue" }, { h: 46, d: "Wed" },
  { h: 68, d: "Thu" }, { h: 80, d: "Fri" }, { h: 64, d: "Sat" }, { h: 94, d: "Sun" },
];

type Msg = { who: "user" | "bot"; t: string } | { who: "typing" };

export default function Showcase() {
  const [tab, setTab] = useState<Tab>("chat");
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [cap, setCap] = useState(0);
  const [lit, setLit] = useState(0);
  const [visible, setVisible] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  /* Start demos when the stage scrolls into view */
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([en]) => { if (en.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Looping chat script */
  useEffect(() => {
    if (!visible || tab !== "chat") return;
    let timers: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      setMsgs([]);
      let delay = 300;
      let acc: Msg[] = [];
      SCRIPT.forEach((m) => {
        if (m.who === "bot") {
          const before = [...acc];
          timers.push(setTimeout(() => setMsgs([...before, { who: "typing" }]), delay));
          delay += 900;
        }
        acc = [...acc, m];
        const snapshot = [...acc];
        timers.push(setTimeout(() => setMsgs(snapshot), delay));
        delay += m.who === "user" ? 1000 : 1400;
      });
      timers.push(setTimeout(run, delay + 4000));
    };
    run();
    return () => timers.forEach(clearTimeout);
  }, [visible, tab]);

  /* Voice captions rotation */
  useEffect(() => {
    const id = setInterval(() => setCap((c) => (c + 1) % CAPS.length), 3400);
    return () => clearInterval(id);
  }, []);

  /* Workflow node lighting */
  useEffect(() => {
    const id = setInterval(() => setLit((l) => (l + 1) % NODES.length), 1100);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="showcase" style={{ background: "linear-gradient(180deg,transparent,rgba(7,11,29,.6),transparent)" }}>
      <div className="wrap center">
        <div className="kicker rv">Interactive Showcase</div>
        <h2 className="h2 rv">
          See <span className="grad-text">intelligence</span> in motion
        </h2>
        <p className="lede rv">A live glimpse of the AI systems we build into everyday operations.</p>

        <div className="show-tabs rv" role="tablist" aria-label="AI demos">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={tab === t.id ? "on" : ""}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="stage rv" ref={stageRef}>
          {/* Chatbot */}
          <div className={`pane ${tab === "chat" ? "on" : ""}`} role="tabpanel">
            <div className="pane-title"><i /> MintBot · Support Agent</div>
            <div className="chat">
              {msgs.map((m, i) =>
                m.who === "typing" ? (
                  <div key={`ty-${i}`} className="msg bot typing show"><i /><i /><i /></div>
                ) : (
                  <div key={i} className={`msg ${m.who} show`}>{m.t}</div>
                )
              )}
            </div>
          </div>

          {/* Voice */}
          <div className={`pane ${tab === "voice" ? "on" : ""}`} role="tabpanel">
            <div className="pane-title"><i /> Voice Agent · Inbound Call</div>
            <div className="voice-viz" aria-hidden="true">
              {Array.from({ length: 46 }, (_, i) => (
                <i
                  key={i}
                  style={{
                    animationDelay: `${i * 0.045}s`,
                    animationDuration: `${0.8 + ((i * 37) % 90) / 100}s`,
                  }}
                />
              ))}
            </div>
            <p className="voice-cap">
              <b>{CAPS[cap].speaker}:</b> “{CAPS[cap].text}”
            </p>
          </div>

          {/* Workflow */}
          <div className={`pane ${tab === "flow" ? "on" : ""}`} role="tabpanel">
            <div className="pane-title"><i /> Automation Pipeline · Running</div>
            <div className="flow">
              {NODES.map((n, i) => (
                <div key={n.title} style={{ display: "contents" }}>
                  {i > 0 && <div className="pipe" />}
                  <div className={`node ${lit === i ? "lit" : ""}`}>
                    <div className="nic">{n.icon}</div>
                    <b>{n.title}</b>
                    {n.sub}
                  </div>
                </div>
              ))}
            </div>
            <p className="bars-cap">1,208 leads processed today · zero manual touches</p>
          </div>

          {/* Analytics */}
          <div className={`pane ${tab === "ana" ? "on" : ""}`} role="tabpanel">
            <div className="pane-title"><i /> Real-time AI Analytics</div>
            <div className="bars" aria-hidden="true">
              {BARS.map((b, i) => (
                <div key={b.d} className="b" style={{ height: `${b.h}%`, transitionDelay: `${0.05 + i * 0.07}s` }}>
                  <span>{b.d}</span>
                </div>
              ))}
            </div>
            <p className="bars-cap">Automated conversations per day — trending ▲ 32% week over week</p>
          </div>
        </div>
      </div>
    </section>
  );
}
