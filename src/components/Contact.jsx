import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionWrapper from './layout/SectionWrapper.jsx';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success');
        form.current.reset();
      })
      .catch((error) => {
        setStatus('error');
        console.error(error);
      });
  };

  const isLoading = status === 'loading';

  return (
    <> <span id='contact'></span>
    <SectionWrapper sectionTitle="Confession">
      <div className="flex flex-col md:flex-row gap-4 md:justify-between md:gap-16">
        <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-4">
          <h3 className="font-semibold">Wanna work together? Drop the bag, I'll drop the code.</h3>

          <div className="flex flex-col gap-1">
            <label className="text-[12px] text-black">Your Email</label>
            <input
              type="email"
              name="email"
              required
              disabled={isLoading}
              placeholder="Enter your email here..."
              className="text-[12px] bg-transparent text-gray-600 px-3 py-2 border border-black/[0.5] rounded outline-none disabled:opacity-50"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[12px] text-black">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              disabled={isLoading}
              placeholder="Drop your message here..."
              className="text-[12px] bg-transparent text-gray-600 px-3 py-2 border border-black/[0.5] rounded outline-none resize-none disabled:opacity-50"
            />
          </div>

          {status === 'success' && (
            <p className="text-green-600 text-[12px]">✅ Message sent! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-[12px]">❌ Failed to send. Please try again or email me directly.</p>
          )}

          <div className="flex">
            <button
              type="submit"
              disabled={isLoading}
              className="px-5 py-2 rounded-2xl bg-white text-black text-sm font-semibold shadow hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? '⏳ Sending...' : '🤝 Deal'}
            </button>
          </div>
        </form>

        <img
          src='/img/sections/calling.webp'
          className="max-w-full md:max-w-[30vw] object-contain"
          alt="Mukhtar calling"
        />
      </div>
    </SectionWrapper>
    </>
  );
}