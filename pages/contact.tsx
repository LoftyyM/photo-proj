import Header from "../Components/header";
import Footer from "../Components/footer";
import { useState } from "react";

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const initialFormValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

function ContactForm() {
  const [formValues, setFormValues] =
    useState<ContactFormValues>(initialFormValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle form submission here, e.g. by sending an email using a service
    console.log(formValues);
    alert("Thank you for your message!");
    setFormValues(initialFormValues);
  };

  return (
    <div className=" bg-fixed bg-manzana-Image bg-center bg-cover overflow-auto  ">
      <Header className={""} />
      <div className="flex items-center justify-center h-screen">
        <form
          className="m-auto w-full max-w-lg sm:pt-4 "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap mx-3 mb-6">
            <div className="w-full sm:w-full md:w-1/2 sm:px-3 md:px-2 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="firstName"
              >
                First Name:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                id="firstName"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full sm:w-full md:w-1/2 sm:px-3 md:px-2">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                id="lastName"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap sm:mx-3 sm:mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap sm:mx-3 sm:mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="phone"
              >
                Phone:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="tel"
                id="phone"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap sm:mx-3 sm:mb-6">
            <div className="w-full px-3">
              <label htmlFor="message">Message:</label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex justify-center md:items-center">
            <div className=" ">
              <button
                className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer className={""} />
    </div>
  );
}
export default ContactForm;
