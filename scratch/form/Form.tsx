import type { NextPage } from 'next';
import { FormEvent, useState } from 'react';

export interface IForm {
  name: string;
  email: string;
  checkbox: boolean;
}

const Form: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    let form = {
      name,
      email,
      phone,
      message,
    };

    const rawResponse = await fetch('/api/formSubmit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    const content = await rawResponse.json();

    console.log(content);
    alert('Thanks for getting back to us!');

    setMessage('');
    setPhone('');
    setName('');
    setEmail('');
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-2/3 md:w-1/3 h-1/2 mx-auto py-16 bg-yellow-200 rounded-md">
          <h2 className="flex items-center justify-center text-3xl font-bold">
            Let us know if you are able to go!
          </h2>
          <h3 className="flex items-center justify-center text-xl fond-bold">
            Put in the message if you can or can not and anything else.
          </h3>
          <form
            action="POST"
            className="py-4 space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center justify-center">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                className="shadow-md focus:ring-yellow-800 focus:border-yellow-800 block w-64 sm:text-md border-amber-500 rounded-sm"
                placeholder="Your Name"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="name"
                id="email"
                className="shadow-md focus:ring-yellow-800 focus:border-yellow-800 block w-64 sm:text-md border-amber-500 rounded-sm"
                placeholder="Your Email"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="phone" className="sr-only">
                Name
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                name="phone"
                id="phone"
                className="shadow-md focus:ring-yellow-800 focus:border-yellow-800 block w-64 sm:text-md border-amber-500 rounded-sm"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="message" className="sr-only">
                Name
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                id="message"
                className="shadow-md focus:ring-yellow-800 focus:border-yellow-800 block w-64 sm:text-md border-amber-500 rounded-sm"
                placeholder="Leave a message!"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="flex items-center text-2xl font-bold justify-center  rounded-md shadow py-2 px-4 text-amber-800 bg-orange-300"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
