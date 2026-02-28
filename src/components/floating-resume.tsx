"use client";

import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingResume() {
  return (
    <div className="fixed bottom-20 right-4 z-50">
      <Button
        className="shadow-lg gap-2 rounded-full px-4"
        onClick={() => window.open("/Shiva_Maurya_Resume.pdf?v2", "_blank")}
      >
        <FileText size={16} />
        Resume
      </Button>
    </div>
  );
}
