"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";

import {
  Mail,
  Linkedin,
  Instagram,
  X,
  Coffee,
  Phone,
  User,
  MessageSquare,
  Github,
} from "lucide-react";

const ContactLink = () => {
  const form = useRef<HTMLFormElement>(null);

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<null | boolean>(null);

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!form.current) return; // <-- Return early if no form ref

  setLoading(true);
  setSuccess(null);

  emailjs
    .sendForm(
      "service_7nvummg",
      "template_26d3tsi",
      form.current,
      "0kGjcEyduZwbxclW7"
    )
    .then(() => {
      setLoading(false);
      setSuccess(true);
      form.current?.reset();
      router.push("/thank-you");
    })
    .catch((error) => {
      setLoading(false);
      setSuccess(false);
      console.error("EmailJS error:", error.text);
    });
};


  return (
    <section className="bg-black text-white px-6 py-12 md:px-24">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-4 text-gray-300">
            If you have any inquiries, please feel free to reach out.
            You can contact me via email at <br />
            <a
              href="mailto:ayush1337@hotmail.com"
              className="text-cyan-400 underline"
            >
              ayush1337@hotmail.com
            </a>
          </p>

          <h3 className="font-semibold mb-2">Follow me</h3>
          <ul className="flex gap-3 mt-4">
            {[Github, Linkedin, Instagram, X, Coffee].map((Icon, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="p-2 border border-white/20 rounded-xl text-white hover:bg-white hover:text-black transition-colors duration-200 block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center border border-gray-700 rounded-lg px-4 py-2 bg-zinc-900">
              <User className="text-gray-400 mr-2" size={18} />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="bg-transparent outline-none w-full text-white"
                required
              />
            </div>
            <div className="flex items-center border border-gray-700 rounded-lg px-4 py-2 bg-zinc-900">
              <Phone className="text-gray-400 mr-2" size={18} />
              <input
                type="tel"
                name="phone"
                placeholder="Phone No"
                className="bg-transparent outline-none w-full text-white"
              />
            </div>
          </div>

          <div className="flex items-center border border-gray-700 rounded-lg px-4 py-2 bg-zinc-900">
            <Mail className="text-gray-400 mr-2" size={18} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-transparent outline-none w-full text-white"
              required
            />
          </div>

          <div className="flex items-start border border-gray-700 rounded-lg px-4 py-2 bg-zinc-900">
            <MessageSquare className="text-gray-400 mr-2 mt-1" size={18} />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="bg-transparent outline-none w-full text-white resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {/* Success/Error Messages */}
          {success === true && (
            <p className="text-green-400 mt-2">Message sent successfully!</p>
          )}
          {success === false && (
            <p className="text-red-500 mt-2">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-12 border-t border-gray-800 pt-6 text-sm text-gray-400">
        <p>© 2025 Developed with 💙 by Pradum</p>
        <div className="mt-2 md:mt-0">
          <a href="#" className="text-cyan-400 hover:underline mr-4">
            RSS FEED
          </a>
          <a href="#" className="text-cyan-400 hover:underline">
            SITE MAP
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactLink;
