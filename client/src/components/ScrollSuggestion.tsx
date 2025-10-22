import React from 'react';
import { ChevronDown } from 'lucide-react'; // Assuming lucide-react is available for icons

export default function ScrollSuggestion() {
  return (
    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce">
      <ChevronDown className="h-8 w-8 text-foreground opacity-70" />
    </div>
  );
}