import React, { useState } from "react";
import { Mail, Send, Github, Linkedin, Sparkles } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    // Simulate sending message
    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");

    // Reset success animation after a few seconds
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-pastel-red-dark mb-2 block">
          Get in Touch
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
          Contact
        </h2>
        <p className="text-sm md:text-base text-stone-600 max-w-xl mx-auto mt-2 opacity-90">
          Leave a message, say hello, or request a collaboration proposal!
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Contact Form */}
        <div className="glass-panel p-6 md:p-8 rounded-2xl relative border-stone-200/80">
          <div className="bento-glow" />
          <h3 className="text-lg font-bold text-stone-900 mb-6 flex items-center gap-2">
            <Mail className="w-5 h-5 text-pastel-red-dark" /> Drop Me a Line
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block mb-1.5">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-400 focus:bg-white transition-all font-sans shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block mb-1.5">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-400 focus:bg-white transition-all font-sans shadow-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block mb-1.5">
                Your Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                placeholder="Hey Satyaki! Let's collaborate on some cool, helpful tools..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-400 focus:bg-white transition-all font-sans resize-none shadow-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-pastel-red border border-pastel-red-border text-pastel-red-dark font-bold text-xs uppercase tracking-wider hover:bg-pastel-red/80 transition-all flex items-center justify-center gap-2 cursor-pointer btn-glow-primary shadow-sm"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>

          {success && (
            <div className="mt-4 p-3.5 rounded-xl bg-pastel-yellow border border-pastel-yellow-border/40 text-pastel-yellow-dark text-xs text-center font-bold animate-fadeIn">
              ✔ Message sent successfully! I will get back to you soon.
            </div>
          )}
        </div>

        {/* Social connections */}
        <div className="glass-panel p-6 rounded-2xl relative border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/50">
          <div className="bento-glow" />
          <div className="flex items-center gap-3">
            <div className="p-2 bg-pastel-red/50 border border-pastel-red-border/30 text-pastel-red-dark rounded-xl">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-extrabold text-stone-800 uppercase tracking-wider">Connect</div>
              <div className="text-xs text-stone-500 mt-0.5">Let's build something impactful together</div>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <a
              href="https://github.com/satyaki03-web"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-stone-100 border border-stone-200 hover:bg-stone-200/50 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/satyaki-mukherjee-26a498375"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-stone-100 border border-stone-200 hover:bg-stone-200/50 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
