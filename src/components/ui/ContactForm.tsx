import { useState } from 'react';
import type { FC, FormEvent } from 'react';

export const ContactForm: FC = () => {
  const [status, setStatus] = useState<'' | 'sending' | 'success' | 'error'>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/myzplqvy', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="w-full p-8 border-4 border-black bg-white flex flex-col items-center justify-center gap-4 text-center">
        <svg className="w-16 h-16 text-[#FF3C38]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <h3 className="font-black text-3xl uppercase tracking-widest mt-2">Message Sent!</h3>
        <p className="text-black/80 text-lg">Thank you for reaching out! </p>
        <button 
          onClick={() => setStatus('')}
          className="mt-4 p-4 bg-black text-white font-mono font-bold text-sm tracking-widest uppercase transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(255,60,56,1)] border-2 border-black active:translate-y-0 active:translate-x-0 active:shadow-none"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
      {status === 'error' && (
        <div className="p-4 bg-red-100 border-2 border-red-500 text-red-700 font-bold">
          Oops! There was a problem submitting your form. Please try again.
        </div>
      )}
      
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-mono text-sm font-bold uppercase tracking-widest">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full p-4 bg-transparent border-2 border-black rounded-none font-sans text-base transition-colors focus:bg-white focus:border-[var(--accent)] focus:outline-none focus:ring-0"
          placeholder="Your Name"
          disabled={status === 'sending'}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-mono text-sm font-bold uppercase tracking-widest">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-4 bg-transparent border-2 border-black rounded-none font-sans text-base transition-colors focus:bg-white focus:border-[var(--accent)] focus:outline-none focus:ring-0"
          placeholder="youremail@example.com"
          disabled={status === 'sending'}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-mono text-sm font-bold uppercase tracking-widest">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full p-4 bg-transparent border-2 border-black rounded-none font-sans text-base transition-colors focus:bg-white focus:border-[var(--accent)] focus:outline-none focus:ring-0 resize-y"
          placeholder="Send me a message!"
          disabled={status === 'sending'}
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full mt-2 p-4 bg-black text-white font-mono font-bold text-base tracking-widest uppercase flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(255,60,56,1)] border-2 border-black active:translate-y-0 active:translate-x-0 active:shadow-none disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:translate-x-0 disabled:hover:shadow-none"
      >
        {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
        {!status && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        )}
      </button>
    </form>
  );
};
