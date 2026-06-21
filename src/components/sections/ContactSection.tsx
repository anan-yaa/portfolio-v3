import type { FC } from 'react';
import { ContactCard } from '../ui/ContactCard';
import { ContactForm } from '../ui/ContactForm';
import resumePDF from '../../assets/Ananyaa_Sri_Resume.pdf';

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const ResumeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

export const ContactSection: FC = () => {
  return (
    <section id="contact" className="w-full bg-[#F0E8D8] border-t-4 border-black relative">
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        
        {/* Left Column - 45% */}
        <div className="w-full lg:w-[45%] border-b-4 lg:border-b-0 lg:border-r-4 border-black p-8 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-center relative">
          <div className="mb-12">
            <span className="font-mono text-sm tracking-widest font-bold text-black/70 mb-4 block">08 / CONTACT</span>
            <h2 className="text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none mb-6">
              LET'S <br/>CONNECT.
            </h2>
            <p className="text-lg text-black/80 max-w-md leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach out. I'm currently open to new opportunities and exciting challenges.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <ContactCard 
              icon={<MailIcon />} 
              label="Email" 
              value="ananyaasri26@gmail.com"
              href="mailto:ananyaasri26@gmail.com" 
            />
            <ContactCard 
              icon={<GithubIcon />} 
              label="GitHub" 
              value="github.com/anan-yaa"
              href="https://github.com/anan-yaa" 
            />
            <ContactCard 
              icon={<LinkedinIcon />} 
              label="LinkedIn" 
              value="linkedin.com/in/ananyaa-sri"
              href="https://www.linkedin.com/in/ananyaa-sri/" 
            />
            <ContactCard 
              icon={<ResumeIcon />} 
              label="Resume" 
              value="Resume.pdf"
              href={resumePDF} 
            />
          </div>
        </div>

        {/* Right Column - 55% */}
        <div className="w-full lg:w-[55%] p-8 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-center">
          <div className="w-full max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>

      </div>
    </section>
  );
};
