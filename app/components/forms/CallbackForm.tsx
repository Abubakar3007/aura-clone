"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { toast } from "sonner";
const CallbackForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We will contact you shortly.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };
  return <form onSubmit={handleSubmit} className="max-w-[600px] w-full mx-auto">
      {/* Name Fields */}
      <div className="grid grid-cols-2 sm:gap-6 gap-3 mb-6">
        <div>
          <label htmlFor="firstName" className="block">
            Name*
          </label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required className="bg-white w-full text-[15px] h-11 px-[16px] outline-none" />
          <p className="text-center text-xs mt-1">This field is required</p>
        </div>
        <div>
          <label htmlFor="lastName" className="invisible opacity-0 block">
            Last Name*
          </label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required className="h-11 bg-white w-full text-[15px] px-[16px] outline-none" />
        </div>
      </div>

      {/* Email */}
      <div className="mb-6">
        <label htmlFor="email" className="block">
          Email*
        </label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="h-11 bg-white w-full text-[15px] px-[16px] outline-none font-light " />
      </div>

      {/* Phone */}
      <div className="mb-6">
        <label htmlFor="phone" className="block">
          Phone*
        </label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="h-11 bg-white w-full px-[16px] outline-none" />
      </div>

      {/* Company */}
      <div className="mb-6">
        <label htmlFor="company" className="block">
          Company*
        </label>
        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="h-11 bg-white w-full text-[15px] px-[16px] outline-none" />
      </div>

      {/* Message */}
      <div className="mb-4">
        <label htmlFor="message" className="block">
          Message*
        </label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="h-11 resize-none bg-white text-[15px] w-full px-[16px] py-[9px] outline-none" />
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn-primary max-w-44 armata px-8 text-xs mx-auto block justify-center h-14">
        <span className="align-middle">Submit</span>
        <ChevronRight className="w-6 h-6 inline-block ml-2 align-middle" />
      </button>
    </form>;
};
export default CallbackForm;