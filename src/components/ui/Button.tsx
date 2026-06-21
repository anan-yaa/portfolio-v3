import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'dark';

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: any;
}

export function Button({ variant = 'primary', children, icon, className = '', href, ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 font-mono font-bold text-sm tracking-wider uppercase border-2 border-black transition-transform active:translate-y-1 active:translate-x-1 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-neo-yellow text-black shadow-neo-solid active:shadow-none hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
    secondary: "bg-white text-black shadow-neo-solid active:shadow-none hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
    dark: "bg-black text-white shadow-neo-solid-yellow border-black active:shadow-none hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_0px_#FFDE59]"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props as AnchorHTMLAttributes<HTMLAnchorElement>}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props as ButtonHTMLAttributes<HTMLButtonElement>}>
      {icon}
      {children}
    </button>
  );
}
