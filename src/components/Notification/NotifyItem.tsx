import React from "react";
import { XCircle, CheckCircle, AlertCircle, Info, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const ToastItem: React.FC<{ id: string; message: string; type: string }> = ({
  message,
  type
}) => {
  return (
    <div
      className={cn(
        "rounded-md px-4 py-6 shadow-[0_0_16px_rgba(0,0,0,0.3)] transition-opacity duration-300 animate-slide-in flex bg-background"
      )}
    > 
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full  flex items-center justify-center">
          {type === "success" && <CheckCircle className="text-success" />}
          {type === "error" && <XCircle className="text-danger" />}
          {type === "info" && <Info className="text-info" />}
          {type === "warning" && <AlertCircle className="text-warning" />}
          {type === "default" && <Info className=" text-info" />}
        </div>
        <div className="ml-2">
          <p className="text-sm font-medium text-foreground">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ToastItem;
