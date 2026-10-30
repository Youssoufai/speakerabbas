"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { contactLines } from "@/data/site";

const icons = {
  Abuja: MapPin,
  Zaria: MapPin,
  Email: Mail,
  Telephone: Phone,
};

export default function ContactForm() {
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = String(data.get("subject") || "");
    const body = `From: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:tajudeenabbas@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  return (
    <div className="grid gap-16 md:grid-cols-2 md:gap-24">
      <div>
        <Reveal>
          <h2 className="font-display text-3xl tracking-tight text-ink">
            Published contacts
          </h2>
        </Reveal>
        <p className="mt-4 max-w-md text-[14px] leading-relaxed text-ink-soft/70">
          These are the addresses and numbers published by the National
          Assembly. This website does not operate a separate mailbox.
        </p>
        <div className="mt-10 space-y-6">
          {contactLines.map((line, i) => {
            const Icon = icons[line.label] || Mail;
            return (
              <Reveal key={`${line.label}-${line.value}`} delay={i * 0.05} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-forest">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <div className="pt-1">
                  <p className="text-[12px] uppercase tracking-[0.14em] text-ink-soft/50">
                    {line.label}
                  </p>
                  {line.href ? (
                    <a href={line.href} className="mt-1 block text-[15px] text-ink hover:text-forest">
                      {line.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-[15px] text-ink-soft/80">{line.value}</p>
                  )}
                  {line.note ? (
                    <p className="mt-1 text-[13px] text-ink-soft/55">{line.note}</p>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Reveal variant="right">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Field label="Full Name" id="name" />
          <Field label="Email Address" id="email" type="email" />
          <Field label="Subject" id="subject" />
          <div>
            <label
              htmlFor="message"
              className="text-[12px] uppercase tracking-[0.14em] text-ink-soft/60"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-2 w-full border-b border-line bg-transparent py-2 text-[15px] text-ink outline-none transition-colors focus:border-forest"
            />
          </div>
          <Button type="submit" variant="primary">
            Open in email
          </Button>
          <p className="text-[13px] leading-relaxed text-ink-soft/60">
            The button opens your email application, addressed to
            tajudeenabbas@yahoo.com, the address on the National Assembly
            member profile. Nothing is stored on this website.
          </p>
          {opened ? (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[14px] text-forest"
            >
              If your email application did not open, use one of the addresses
              listed here.
            </motion.p>
          ) : null}
        </form>
      </Reveal>
    </div>
  );
}

function Field({ label, id, type = "text" }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-[12px] uppercase tracking-[0.14em] text-ink-soft/60"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        className="mt-2 w-full border-b border-line bg-transparent py-2 text-[15px] text-ink outline-none transition-colors focus:border-forest"
      />
    </div>
  );
}
