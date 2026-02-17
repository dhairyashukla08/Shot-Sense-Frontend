export const Label = ({ children, htmlFor, className = '' }) => (
  <label
    htmlFor={htmlFor}
    className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground ${className}`}
  >
    {children}
  </label>
);