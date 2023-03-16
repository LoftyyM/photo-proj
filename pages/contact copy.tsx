import { DynamicHeader, DynamicFooter } from "../Components/dynamicSource";
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
    <div className="flex flex-col h-screen bg-fixed bg-manzana-Image bg-center bg-cover overflow-auto  ">
      <DynamicHeader
        className={
          "flex justify-between items-center relative top-0 lg:h-20 xl:h-30 sm:h-16 md:h-20 px-5"
        }
      />
      <div className="flex items-center justify-center grow ">
        <form
          className="relative m-auto w-full max-w-lg sm:pt-4 sm:pb-4 from-gray-900 to-black bg-gradient-to-b opacity-75 rounded-2xl "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap mx-3 mb-6 ">
            <div className="w-full sm:w-full md:w-1/2 sm:px-3 md:px-2 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="firstName"
              >
                First Name:
              </label>
              <input
                className="appearance-none block w-full bg-gray-900 opacity-40 text-white-700 border border-white-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:opacity-100"
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
                className="appearance-none block w-full bg-gray-900 opacity-40 text-white-700 border border-white-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:opacity-100"
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
                className="appearance-none block w-full bg-gray-900 opacity-40 text-white-700 border border-white-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:opacity-100"
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
                className="appearance-none block w-full bg-gray-900 opacity-40 text-white-700 border border-white-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:opacity-100"
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
                className=" no-resize appearance-none block w-full bg-gray-900 opacity-40 text-white-700 border border-white-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:opacity-100 focus:border-gray-500 h-48 resize-none"
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
                className="shadow bg-gray-900 hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
      <DynamicFooter
        className={"flex lg:h-20 xl:h-30 sm:h-16 md:h-20 px-5 py-5"}
      />
    </div>
  );
}
export default ContactForm;
