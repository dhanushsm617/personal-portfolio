"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    setLoading(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "✅ Message sent successfully!",
        });

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Hide success message after 3 seconds
        setTimeout(() => {
          setStatus({
            type: "",
            message: "",
          });
        }, 3000);
      } else {
        setStatus({
          type: "error",
          message: data.message || "Failed to send message.",
        });

        // Hide error message after 3 seconds
        setTimeout(() => {
          setStatus({
            type: "",
            message: "",
          });
        }, 3000);
      }
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message: "Something went wrong.",
      });

      // Hide error message after 3 seconds
      setTimeout(() => {
        setStatus({
          type: "",
          message: "",
        });
      }, 3000);
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#070707] py-20 sm:py-24 lg:py-20"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-72 w-72 rounded-full bg-red-500/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          {/* <p className="mb-3 text-sm font-semibold uppercase tracking-[6px] text-red-500">
            Contact
          </p> */}

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-6xl">
            Let's Work Together
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always excited to discuss new ideas and opportunities.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Email */}
            <a
              href="mailto:dhanushsm617@gmail.com"
              className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl ml-2 bg-yellow-500/40 p-4 text-yellow-300 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white">
                  <FaEnvelope size={22} />
                </div>

                <div>
                  <h3 className="text-lg lg:ml-0 md:ml-0 ml-10 font-semibold">Email</h3>
                  <p className="mt-1 text-gray-400 group-hover:text-white transition">
                    dhanushsm617@gmail.com
                  </p>
                  <div className="mt-3 ml-8 text-sm font-medium text-yellow-400 sm:hidden">
                    Click to Mail →
                  </div>
                </div>
              </div>

              <div className="hidden text-sm font-medium text-yellow-400 transition-all duration-300 group-hover:translate-x-2 sm:block">
                Click to Mail →
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+917483125842"
              className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl ml-3 bg-blue-500/40 p-4 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <FaPhoneAlt size={22} />
                </div>

                <div>
                  <h3 className="text-lg lg:ml-0 md:ml-0 ml-10 font-semibold">Phone</h3>
                  <p className="mt-1 ml-2 text-gray-400 group-hover:text-white transition">
                    +91 74831 25842
                  </p>
                  <div className="mt-3 ml-8 text-sm font-medium text-blue-400 sm:hidden">
                    Click to Call →
                  </div>
                </div>
              </div>

              <div className="hidden text-sm font-medium text-blue-400 transition-all duration-300 group-hover:translate-x-2 sm:block">
                Click to Call →
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917483125842?text=Hi%20Dhanush,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl ml-3 bg-green-500/15 p-4 text-green-500 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                  <FaWhatsapp size={22} />
                </div>

                <div>
                  <h3 className="text-lg lg:ml-0 md:ml-0 ml-10 font-semibold">WhatsApp</h3>
                  <p className="mt-1 ml-2 text-gray-400 group-hover:text-white transition">
                    +91 74831 25842
                  </p>
                  <div className="mt-3 ml-5 text-sm font-medium text-green-400 sm:hidden">
                    Chat on WhatsApp →
                  </div>
                </div>
              </div>

              <div className="hidden text-sm font-medium text-green-400 transition-all duration-300 group-hover:translate-x-2 sm:block">
                Chat on WhatsApp →
              </div>
            </a>

            {/* Location */}
            <a
              href="https://maps.google.com/?q=Karnataka,India"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl ml-3 bg-red-500/15 p-4 text-red-500 transition-all duration-300 group-hover:bg-red-500 group-hover:text-white">
                  <FaMapMarkerAlt size={22} />
                </div>

                <div>
                  <h3 className="text-lg lg:ml-0 md:ml-0 ml-10 font-semibold">Location</h3>
                  <p className="mt-1 ml-4 text-gray-400 group-hover:text-white transition">
                    Karnataka, India
                  </p>
              <div className="mt-3 ml-8 text-sm font-medium text-red-400 sm:hidden">
                View on Maps →
              </div>
                </div>
              </div>


              <div className="hidden text-sm font-medium text-red-400 transition-all duration-300 group-hover:translate-x-2 sm:block">
                View on Maps →
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-red-500"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-red-500"
              />
            </div>

            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="mt-5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-red-500"
            />

            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
              className="mt-5 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-red-500"
            />

            {/* Success / Error Message */}
            <AnimatePresence>
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`mt-5 rounded-xl border px-4 py-3 text-sm font-medium ${
                    status.type === "success"
                      ? "border-green-500/30 bg-green-500/20 text-green-400"
                      : "border-red-500/30 bg-red-500/20 text-red-400"
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={loading}
              className={`mt-6 flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 font-semibold transition-all duration-300 ${
                loading
                  ? "cursor-not-allowed bg-gray-600"
                  : "bg-red-500 hover:bg-red-600 hover:scale-[1.02]"
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="h-5 w-5 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>

                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>

            <p className="mt-4 text-center text-sm text-gray-400">
              ⚡ Usually replies within{" "}
              <span className="text-red-400">24 hours</span>.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
