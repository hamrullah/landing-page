"use client";

import * as React from "react";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Check } from "lucide-react";

export type SelectOption = { label: string; value: string };

type Props = {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  options: SelectOption[];
  required?: boolean;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export function AnimatedSelectField({
  id,
  name,
  label,
  placeholder = "Select an option",
  options,
  required,
  defaultValue = "",
  onChange,
}: Props) {
  const [value, setValue] = React.useState<string>(defaultValue);
  const selected = options.find((o) => o.value === value);

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1">
        {label}
        {required ? <span className="text-blue-300 ml-1" aria-hidden="true">*</span> : null}
      </label>

      {/* biar ikut ke FormData */}
      <input id={id} name={name} type="hidden" value={value} />

      <DropdownMenu
        buttonClassName="w-full justify-between border border-white/15 bg-gradient-to-r from-[#2a1956]/60 via-[#2f1d5e]/60 to-[#4c1d95]/60 text-white px-4 py-3 rounded-lg"
        options={options.map((o) => ({
          label: o.label,
          onClick: () => {
            setValue(o.value);
            onChange?.(o.value);
          },
          Icon:
            selected?.value === o.value ? (
              <Check className="h-4 w-4" />
            ) : (
              <span className="inline-block w-4" />
            ),
        }))}
      >
        <span className={selected ? "text-white truncate" : "text-white/60 truncate"}>
          {selected ? selected.label : placeholder}
        </span>
      </DropdownMenu>
    </div>
  );
}
