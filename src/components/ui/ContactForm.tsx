import type { FC, FormEvent } from 'react';

export const ContactForm: FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
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
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full mt-2 p-4 bg-black text-white font-mono font-bold text-base tracking-widest uppercase flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(255,60,56,1)] border-2 border-black active:translate-y-0 active:translate-x-0 active:shadow-none"
      >
        SEND MESSAGE
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </form>
  );
};
