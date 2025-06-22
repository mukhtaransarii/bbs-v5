import React from 'react'
import mukhtarCalling from '/img/calling.webp'

export default function Contact() {
  return (
    <div id="contact" className="px-4 py-16">
      <h1 className="text-5xl font-[ClashDisplay] mb-8">Confession</h1>

      <div className="flex flex-col md:flex-row gap-4 md:justify-between md:gap-16">
        <form className="w-full flex flex-col gap-4">
          <h3 className="font-semibold">Wanna work together? Drop the bag, I’ll drop the code.</h3>

          {/* Your Email */}
          <div className="flex flex-col gap-1">
            <label className="text-[12px] text-black">Your Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email here..."
              className="text-[12px] bg-transparent text-gray-600 px-3 py-2 border border-black/[0.5] rounded outline-none"
            />
          </div>

          {/* Your Message */}
          <div className="flex flex-col gap-1">
            <label className="text-[12px] text-black">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Drop your message here..."
              className="text-[12px] bg-transparent text-gray-600 px-3 py-2 border border-black/[0.5] rounded outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex">
            <button
              type="submit"
              className="px-5 py-2 rounded-2xl bg-white text-black text-sm font-semibold shadow hover:bg-gray-200 transition"
            >
              🤝  Deal
            </button>
          </div>
        </form>

        <img
          src={mukhtarCalling}
          className="max-w-full md:max-w-[30vw] object-contain"
        />
      </div>
    </div>
  )
}
