"use client";

import { useState } from "react";
import { useForm } from "./useForm";

function Problem({ status, error }: { status: string; error: string }) {
  if (status !== "error") return null;
  return <p className="pt-4 text-[#9a2020]">{error}</p>;
}

export function PrayerForm() {
  const { submit, status, error } = useForm("prayer");
  const [wantsCall, setWantsCall] = useState(false);

  if (status === "sent")
    return (
      <p className="display text-2xl text-royal-deep">
        We have it. It will be prayed over, and nobody else will see it.
      </p>
    );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        submit(Object.fromEntries(f.entries()));
      }}
      className="pt-6"
    >
      <label className="block">
        <span className="eyebrow text-gold-deep">What can we pray about?</span>
        <textarea name="request" rows={5} required className="field mt-3" />
      </label>
      <div className="grid gap-5 pt-5 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-gold-deep">Your name (optional)</span>
          <input name="name" className="field mt-3" autoComplete="name" />
        </label>
        <label className="block">
          <span className="eyebrow text-gold-deep">Phone or email (optional)</span>
          <input name="contact" className="field mt-3" />
        </label>
      </div>
      <label className="mt-5 flex items-start gap-3 text-sm text-ink/80">
        <input type="checkbox" name="confidential" className="mt-1" />
        Keep this between me and the Bishop.
      </label>
      <label className="mt-3 flex items-start gap-3 text-sm text-ink/80">
        <input
          type="checkbox"
          name="wantsCall"
          className="mt-1"
          checked={wantsCall}
          onChange={(e) => setWantsCall(e.target.checked)}
        />
        I would like someone to call me.
      </label>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button type="submit" disabled={status === "sending"} className="btn-royal mt-7 disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send the request"}
      </button>
      <Problem status={status} error={error} />
    </form>
  );
}

export function ContactForm() {
  const { submit, status, error } = useForm("contact");

  if (status === "sent")
    return (
      <p className="display text-2xl text-royal-deep">
        Thank you — your message is through. Someone will write back to you.
      </p>
    );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        submit(Object.fromEntries(f.entries()));
      }}
      className="pt-6"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-gold-deep">Your full name</span>
          <input name="name" required className="field mt-3" autoComplete="name" />
        </label>
        <label className="block">
          <span className="eyebrow text-gold-deep">About</span>
          <select name="topic" className="field mt-3" defaultValue="">
            <option value="">Choose one</option>
            <option>Joining a course</option>
            <option>Visiting / service times</option>
            <option>Giving</option>
            <option>Our church would like to join the fellowship</option>
            <option>Something else</option>
          </select>
        </label>
        <label className="block">
          <span className="eyebrow text-gold-deep">Email</span>
          <input name="email" type="email" className="field mt-3" autoComplete="email" />
        </label>
        <label className="block">
          <span className="eyebrow text-gold-deep">Phone</span>
          <input name="phone" type="tel" className="field mt-3" autoComplete="tel" />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="eyebrow text-gold-deep">Message</span>
        <textarea name="message" rows={5} required className="field mt-3" />
      </label>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button type="submit" disabled={status === "sending"} className="btn-royal mt-7 disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send"}
      </button>
      <Problem status={status} error={error} />
    </form>
  );
}
