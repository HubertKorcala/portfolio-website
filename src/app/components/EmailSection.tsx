"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email,
      subject,
      message,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 md:py-24 gap-4 relative"
    >
      <div className="absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let{`'`}s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I{`'`}m currently looking for new opportunities, my inbox is always
          open. Wheter you have a question or just want to say hi, I{`'`}
          ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 z-10">
          <Link className="z-10" href="https://github.com/HubertKorcala" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link className="z-10" href="https://www.linkedin.com/in/hubert-korcala-0305a6297/" target="_blank">
            <Image src={LinkedinIcon} alt="LinkedIn Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500">Email sent successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col z-10">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your-email@gmail.com"
                className="bg-[#18191E]  border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                placeholder="Just say hi"
                className="bg-[#18191E]  border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Let's talk about..."
                className="bg-[#18191E]  border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 texte-white font-medium py-2.5 px-5 rounded-lg"
            >
              Sent Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
