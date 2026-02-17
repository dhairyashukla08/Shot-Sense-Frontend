import React, { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

export const Tabs = ({ defaultValue, children, className = "" }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={`w-full ${className}`}>{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ children, className = "" }) => {
  return (
    <div className={`inline-flex items-center justify-center rounded-xl bg-muted p-1 text-muted-foreground ${className}`}>
      {children}
    </div>
  );
};

export const TabsTrigger = ({ value, children, className = "" }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`
        inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-smooth
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        ${isActive 
          ? "bg-background text-foreground shadow-sm bg-gradient-primary text-white" 
          : "hover:bg-background/50 hover:text-foreground"}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children, className = "" }) => {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== value) return null;

  return (
    <div className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-in fade-in-50 duration-300 ${className}`}>
      {children}
    </div>
  );
};