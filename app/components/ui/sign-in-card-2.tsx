"use client";

import * as React from "react";
import { AnimatedSelectField, SelectOption } from "@/components/ui/animated-select-field";

type Props = {
  onSubmit?: (data: Record<string, FormDataEntryValue>) => void;
  title?: string;
  subtitle?: string;
};

const COUNTRIES: SelectOption[] = [
  { label: "Malaysia", value: "MY" },
  { label: "Singapore", value: "SG" },
  { label: "Indonesia", value: "ID" },
  { label: "Thailand", value: "TH" },
  { label: "Philippines", value: "PH" },
  { label: "Vietnam", value: "VN" },
  { label: "Other", value: "OTHER" },
];

const COMPANY_TYPES: SelectOption[] = [
  { label: "Brand / Advertiser", value: "brand" },
  { label: "Agency", value: "agency" },
  { label: "Tech / Platform", value: "tech" },
  { label: "Publisher", value: "publisher" },
  { label: "Other", value: "other" },
];

const COMPANY_SIZES: SelectOption[] = [
  { label: "1–10", value: "1-10" },
  { label: "11–50", value: "11-50" },
  { label: "51–200", value: "51-200" },
  { label: "201–500", value: "201-500" },
  { label: "501–1000", value: "501-1000" },
  { label: "1000+", value: "1000plus" },
];

export function Component({
  onSubmit,
  title = "Request Your Seat",
  subtitle = "Fill in your details and we’ll review your request.",
}: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      FormDataEntryValue
    >;

    if (onSubmit) {
      onSubmit(data);
    }
    form.reset();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/40 to-purple-700/30 backdrop-blur-md p-8 shadow-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-extrabold text-white">{title}</h3>
          {subtitle && (
            <p className="mt-2 text-white/70 text-sm md:text-base">{subtitle}</p>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Grid fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* First name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-1 text-white/90"
              >
                First Name <span className="text-blue-300">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                required
                placeholder="First Name"
                className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Last name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-1 text-white/90"
              >
                Last Name <span className="text-blue-300">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                required
                placeholder="Last Name"
                className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="businessEmail"
                className="block text-sm font-medium mb-1 text-white/90"
              >
                Business Email <span className="text-blue-300">*</span>
              </label>
              <input
                id="businessEmail"
                name="businessEmail"
                type="email"
                autoComplete="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-1 text-white/90"
              >
                Phone Number <span className="text-blue-300">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                placeholder="+60 12 345 6789"
                className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Job title */}
            <div>
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium mb-1 text-white/90"
              >
                Job Title <span className="text-blue-300">*</span>
              </label>
              <input
                id="jobTitle"
                name="jobTitle"
                required
                placeholder="Job Title"
                className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Company name */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium mb-1 text-white/90"
              >
                Company Name <span className="text-blue-300">*</span>
              </label>
              <input
                id="companyName"
                name="companyName"
                required
                placeholder="Company Name"
                className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Company Country - FULL WIDTH */}
            <div className="col-span-2">
              <AnimatedSelectField
                id="companyCountry"
                name="companyCountry"
                label="Company Country"
                placeholder="Select a country"
                options={COUNTRIES}
              />
            </div>

            {/* Company type */}
            <AnimatedSelectField
              id="companyType"
              name="companyType"
              label="Company Type"
              placeholder="Select type"
              options={COMPANY_TYPES}
            />

            {/* Company size */}
            <AnimatedSelectField
              id="companySize"
              name="companySize"
              label="Company Size"
              placeholder="Select size"
              options={COMPANY_SIZES}
            />
          </div>

          {/* Dietary */}
          <div>
            <label
              htmlFor="dietary"
              className="block text-sm font-medium mb-1 text-white/90"
            >
              Do you have any dietary restrictions?
            </label>
            <textarea
              id="dietary"
              name="dietary"
              rows={3}
              placeholder="e.g., vegetarian, no nuts"
              className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Checkboxes */}
          <div className="space-y-4 text-white/80">
            <label
              htmlFor="agreeTerms"
              className="flex items-start gap-3 cursor-pointer"
            >
              <input
                id="agreeTerms"
                name="agreeTerms"
                type="checkbox"
                required
                className="peer sr-only"
              />
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded border border-white/25 bg-white/10 peer-checked:bg-blue-600 peer-checked:border-blue-600">
                <svg
                  viewBox="0 0 20 20"
                  className="h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition"
                >
                  <path
                    d="M5 10l3 3 7-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm">
                Yes, I have read and accepted the{" "}
                <span className="underline decoration-white/50">
                  Event Terms and Conditions
                </span>
                .
              </span>
            </label>

            <label
              htmlFor="agreeComms"
              className="flex items-start gap-3 cursor-pointer"
            >
              <input
                id="agreeComms"
                name="agreeComms"
                type="checkbox"
                className="peer sr-only"
              />
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded border border-white/25 bg-white/10 peer-checked:bg-blue-600 peer-checked:border-blue-600">
                <svg
                  viewBox="0 0 20 20"
                  className="h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition"
                >
                  <path
                    d="M5 10l3 3 7-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm">
                Yes, I would like to receive communications. I understand that I
                can opt out at any time.
              </span>
            </label>

            <p className="text-xs text-white/60 leading-snug">
              Submitting this form does not guarantee acceptance. An official
              confirmation will be sent once approved.
            </p>
          </div>

          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white shadow-lg transition focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Request Your Seat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
