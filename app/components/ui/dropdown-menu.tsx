"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type DropdownMenuProps = {
  options: { label: string; onClick: () => void; Icon?: React.ReactNode }[];
  children: React.ReactNode;
  buttonClassName?: string; // NEW
};

const DropdownMenu = ({ options, children, buttonClassName }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen((v) => !v)}
        className={
          buttonClassName ??
          "px-4 py-2 bg-[#11111198] hover:bg-[#111111d1] shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none rounded-xl backdrop-blur-sm"
        }
      >
        {children ?? "Menu"}
        <motion.span
          className="ml-2"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut", type: "spring" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -5, scale: 0.95, filter: "blur(10px)" }}
            animate={{ y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ y: -5, scale: 0.95, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: "circInOut", type: "spring" }}
            className="absolute z-10 w-56 mt-2 p-1 bg-[#11111198] rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm flex flex-col gap-1"
          >
            {options.length ? (
              options.map((option, idx) => (
                <motion.button
                  key={option.label}
                  initial={{ opacity: 0, x: 10, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.35, delay: idx * 0.06, ease: "easeInOut", type: "spring" }}
                  whileHover={{ backgroundColor: "#11111140" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={option.onClick}
                  className="px-3 py-2 cursor-pointer text-white text-sm rounded-lg w-full text-left flex items-center gap-x-2"
                >
                  {option.Icon}
                  {option.label}
                </motion.button>
              ))
            ) : (
              <div className="px-3 py-2 text-white/80 text-xs">No options</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { DropdownMenu };
