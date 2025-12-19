import React from 'react';
import { FooterLink } from '../atom/Navigation';

export default function FooterLinksColumn({ title, links }) {
  return (
    <div>
      <h4 className="mb-4 font-semibold uppercase text-gray-800">{title}</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <FooterLink key={link.name} href={link.href}>
            {link.name}
          </FooterLink>
        ))}
      </ul>
    </div>
  );
}