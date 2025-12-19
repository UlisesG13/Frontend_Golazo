import React from 'react';

export default function WhyUsListItem({ icon, children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-white shadow-sm text-teal-600">{icon}</span>
      <span className="text-gray-700 leading-tight">{children}</span>
    </li>
  );
}