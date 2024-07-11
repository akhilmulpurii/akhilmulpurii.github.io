"use client";
import React, { useState, createContext } from "react";

export type SidebarContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SidebarContext = createContext<any>(null);

const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
