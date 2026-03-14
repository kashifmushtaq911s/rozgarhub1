"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext<{
  activeValue: string | null;
  setActiveValue: (value: string | null) => void;
  collapsible?: boolean;
} | null>(null);

export function Accordion({ 
  children, 
  type = "single", 
  collapsible = true, 
  defaultValue, 
  className 
}: { 
  children: React.ReactNode; 
  type?: "single"; 
  collapsible?: boolean; 
  defaultValue?: string;
  className?: string;
}) {
  const [activeValue, setActiveValue] = React.useState<string | null>(defaultValue || null);

  return (
    <AccordionContext.Provider value={{ activeValue, setActiveValue, collapsible }}>
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

const ItemContext = React.createContext<string>("");

export function AccordionItem({ 
  value, 
  children, 
  className 
}: { 
  value: string; 
  children: React.ReactNode; 
  className?: string;
}) {
  const { activeValue } = useAccordionContext();
  return (
    <ItemContext.Provider value={value}>
      <div className={cn("border-b", className)} data-state={activeValue === value ? "open" : "closed"}>
        {children}
      </div>
    </ItemContext.Provider>
  )
}

export function AccordionTrigger({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  const { activeValue, setActiveValue, collapsible } = useAccordionContext();
  const itemValue = React.useContext(ItemContext);
  const isOpen = activeValue === itemValue;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isOpen) {
      if (collapsible) setActiveValue(null);
    } else {
      setActiveValue(itemValue);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "flex w-full items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-left",
        className
      )}
      data-state={isOpen ? "open" : "closed"}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </button>
  )
}

export function AccordionContent({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  const { activeValue } = useAccordionContext();
  const itemValue = React.useContext(ItemContext);
  const isOpen = activeValue === itemValue;

  if (!isOpen) return null;

  return (
    <div className={cn("overflow-hidden text-sm transition-all animate-in fade-in slide-in-from-top-1", className)}>
      <div className="pb-4 pt-0">{children}</div>
    </div>
  )
}

function useAccordionContext() {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("Accordion components must be used within an Accordion");
  return context;
}
