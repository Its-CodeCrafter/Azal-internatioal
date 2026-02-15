import React from 'react';

const PageWrapper = ({ children, className = "" }) => {
  return (
    <div className={`
      w-full 
      px-4          /* Mobile: 16px padding */
      sm:px-6       /* Tablet: 24px padding */
      lg:px-8       /* Desktop: 32px padding */
      xl:px-12      /* Large: 48px padding */
      max-w-[1920px] /* Cap width for Ultra-Wide screens */
      mx-auto 
      ${className}
    `}>
      {children}
    </div>
  );
};

export default PageWrapper;