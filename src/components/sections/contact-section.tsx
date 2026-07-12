import type { ReactNode } from "react";

import { socialLinks } from "@/data/socialLinks";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section shell-section" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact</h2>
      <div className="contact-section__body">
        <p>Reach out through one of the available channels below.</p>
        <div className="contact-icons" aria-label="Contact channels">
          <ContactItem label="Gmail" href={socialLinks.email}>
            <GmailIcon />
          </ContactItem>
          <ContactItem label="LinkedIn" href={socialLinks.linkedin}>
            <LinkedInIcon />
          </ContactItem>
          <ContactItem label="GitHub" href={socialLinks.github}>
            <GitHubIcon />
          </ContactItem>
        </div>
      </div>
    </section>
  );
}

type ContactItemProps = Readonly<{
  label: string;
  href: string | null;
  children: ReactNode;
}>;

function ContactItem({ label, href, children }: ContactItemProps) {
  const content = (
    <span className="contact-icons__item">
      <span className="contact-icons__icon" aria-hidden="true">
        {children}
      </span>
      <span className="contact-icons__label">{label}</span>
    </span>
  );

  if (!href) {
    return <div className="contact-icons__card">{content}</div>;
  }

  const isExternalLink = href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:");

  return (
    <a
      className="contact-icons__card"
      href={href}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noreferrer" : undefined}
    >
      {content}
    </a>
  );
}

function GmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.5" y="6" width="15" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.25 8.25 12 12.5l5.75-4.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.5" y="4.5" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.25 10v5.25M8.25 7.6v.1M11.1 15.25V12.8c0-.95.75-1.7 1.7-1.7s1.7.75 1.7 1.7v2.45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4.5a7.5 7.5 0 0 0-2.37 14.62c.38.07.52-.16.52-.36v-1.26c-2.11.46-2.56-.86-2.56-.86-.35-.9-.86-1.14-.86-1.14-.7-.48.05-.47.05-.47.77.05 1.17.8 1.17.8.68 1.17 1.79.83 2.23.64.07-.49.27-.83.49-1.02-1.69-.19-3.47-.84-3.47-3.73 0-.82.29-1.49.77-2.02-.08-.19-.33-.95.07-1.98 0 0 .63-.2 2.07.77a7.24 7.24 0 0 1 3.77 0c1.44-.97 2.07-.77 2.07-.77.4 1.03.15 1.79.07 1.98.48.53.77 1.2.77 2.02 0 2.9-1.78 3.54-3.48 3.73.28.24.54.72.54 1.46v2.16c0 .2.14.43.53.36A7.5 7.5 0 0 0 12 4.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}