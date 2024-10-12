"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import { validation } from "../utils/validation";
import { MdErrorOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let validValue = value;

    // Define validation rules based on the field name
    if (name === "phone") {
      // Phone validation regex
      const phoneRegex = /^[\d\s\\(\)]*$/;
      if (!phoneRegex.test(value)) {
        // Optionally handle invalid phone number input
        return; // Exit early or handle invalid input (e.g., show an error message)
      }
    }

    if (name === "email") {
      // Forbidden symbols for email
      const forbiddenSymbols = /[\[\]\/,\\\-=\+;'"|]/;
      if (forbiddenSymbols.test(value)) {
        // Optionally handle invalid email input
        return; // Exit early or handle invalid input
      }
    }

    if (name === "name") {
      // Name validation regex: only allow letters, spaces, and apostrophes

      // Sanitize value to remove invalid characters
      validValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    // Update formData with valid value
    setFormData((prevData) => ({ ...prevData, [name]: validValue }));
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const errResponse = validation(formData);
      if (errResponse !== "") setError(errResponse);
      else {
        setError(null);
        const res = await fetch("/api/contactus", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData?.name,
            email: formData?.email,
            phone: formData?.phone,
            message: formData?.message,
          }),
        });
        const data = await res.json();
        if (data?.status === 200) {
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          toast.success("Email sent Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error(data?.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    } catch (error) {
      toast.error("Err sending Email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="contact" className="bg-primary py-20">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-secondary mb-12 font-poppins"
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          Get in Touch
        </motion.h2>
        <motion.div
          className="bg-[#C58FFF] max-w-lg mx-auto p-8 rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="name"
                className="block text-start text-base font-poppins font-extrabold text-primary"
              >
                Name <span className="text-red-600">*</span>
              </label>
              <Input
                variant="primary"
                size="primary"
                type="text"
                name="name"
                value={formData.name}
                eventAction={handleChange}
                className={
                  "font-poppins text-lg font-extrabold placeholder:font-poppins placeholder:text-lg placeholder:font-extrabold"
                }
              />
              {error?.nameErr ? (
                <div className="flex items-start">
                  <div className="flex justify-center items-center gap-1">
                    <MdErrorOutline className="text-red-600" />
                    <span className="text-red-600 font-poppins text-base font-semibold">
                      {error?.nameErr}
                    </span>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className="block text-start text-base font-poppins font-extrabold text-primary"
              >
                Email <span className="text-red-600">*</span>
              </label>
              <Input
                variant="primary"
                size="primary"
                type="email"
                name="email"
                value={formData.email}
                eventAction={handleChange}
                className={
                  "font-poppins text-lg font-extrabold placeholder:font-poppins placeholder:text-lg placeholder:font-extrabold"
                }
              />
              {error?.emailErr ? (
                <div className="flex items-start">
                  <div className="flex justify-center items-center gap-1">
                    <MdErrorOutline className="text-red-600" />
                    <span className="text-red-600 font-poppins text-base font-semibold">
                      {error?.emailErr}
                    </span>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="phone"
                className="block text-start text-base font-poppins font-extrabold text-primary"
              >
                Phone <span className="text-red-600">*</span>
              </label>
              <Input
                variant="primary"
                size="primary"
                type="tel"
                name="phone"
                value={formData.phone}
                eventAction={handleChange}
                className={
                  "font-poppins text-lg font-extrabold placeholder:font-poppins placeholder:text-lg placeholder:font-extrabold"
                }
              />
              {error?.phoneErr ? (
                <div className="flex items-start">
                  <div className="flex justify-center items-center gap-1">
                    <MdErrorOutline className="text-red-600" />
                    <span className="text-red-600 font-poppins text-base font-semibold">
                      {error?.phoneErr}
                    </span>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="message"
                className="block text-start text-base font-poppins font-extrabold text-primary"
              >
                Message <span className="text-red-600">*</span>
              </label>
              <TextArea
                name={"message"}
                rows={"4"}
                cols=""
                variant="primary"
                size="primary"
                value={formData.message}
                eventAction={handleChange}
                className={
                  "font-poppins text-lg font-extrabold placeholder:font-poppins placeholder:text-lg placeholder:font-extrabold"
                }
              />
              {error?.messageErr ? (
                <div className="flex items-start">
                  <div className="flex justify-center items-center gap-1">
                    <MdErrorOutline className="text-red-600" />
                    <span className="text-red-600 font-poppins text-base font-semibold">
                      {error?.messageErr}
                    </span>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
            <Button
              type={"submit"}
              variant="secondary"
              label={"Send Message"}
              size="lg"
              className={
                "font-semibold font-poppins hover:bg-primary/80 focus:outline-none"
              }
            />
          </form>
        </motion.div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
