import React from 'react';

export function Card({
  children,
  className = '',
  hover = false,
  as: Component = 'div',
  ...props
}) {
  const hoverStyles = hover
    ? 'transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm'
    : '';

  return (
    <Component
      className={`bg-white dark:bg-[#10141e] border border-slate-200/90 dark:border-slate-800/80 rounded-lg p-5 sm:p-6 ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
