import { ArrowUpRight, WhatsappLogo } from '@phosphor-icons/react';
import { business } from '../content';

type WhatsAppLinkProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'light';
  className?: string;
  icon?: boolean;
};

export function WhatsAppLink({ children, variant = 'primary', className = '', icon = true }: WhatsAppLinkProps) {
  return (
    <a className={`button button-${variant} ${className}`} href={business.whatsapp} target="_blank" rel="noopener noreferrer">
      {icon && <WhatsappLogo size={19} weight="fill" aria-hidden="true" />}
      <span>{children}</span>
      <ArrowUpRight size={17} weight="bold" aria-hidden="true" />
    </a>
  );
}
