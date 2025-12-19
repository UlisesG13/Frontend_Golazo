import React from 'react';


export const FooterLink = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="text-sm text-gray-600 transition-colors hover:text-gray-900"
    >
      {children}
    </a>
  </li>
);


export const SocialIcon = ({ href, icon: Icon }) => (
  <a
    href={href}
    className="text-gray-500 transition-colors hover:text-gray-800"
  >
    <Icon />
  </a>
);