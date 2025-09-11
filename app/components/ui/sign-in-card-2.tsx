"use client";

import * as React from "react";

type Props = {
  /** Optional: handle submit sendiri di parent */
  onSubmit?: (data: Record<string, FormDataEntryValue>) => void;
  /** Optional: judul di header kartu */
  title?: string;
  /** Optional: subjudul kecil */
  subtitle?: string;
};

export function Component({
  onSubmit,
  title = "Request Your Seat",
  subtitle = "Fill in your details and we’ll review your request.",
}: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(
      new FormData(form).entries()
    ) as Record<string, FormDataEntryValue>; // ← ketik hasil fromEntries

    if (onSubmit) {
      onSubmit(data);
    } else {
      alert(`Thanks! We received your registration:\n${JSON.stringify(data, null, 2)}`);
    }
    form.reset();
  };

  return (
    <div className="w-full">
      <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-6 md:p-8">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">{title}</h3>
          {subtitle ? <p className="mt-2 text-white/80">{subtitle}</p> : null}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* First / Last */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                First Name<span className="text-blue-300 ml-1" aria-hidden="true">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                required
                placeholder="First Name"
                className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                Last Name<span className="text-blue-300 ml-1" aria-hidden="true">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                required
                placeholder="Last Name"
                className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Email / Phone */}
            <div>
              <label htmlFor="businessEmail" className="block text-sm font-medium mb-1">
                Business Email<span className="text-blue-300 ml-1" aria-hidden="true">*</span>
              </label>
              <input
                id="businessEmail"
                name="businessEmail"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number<span className="text-blue-300 ml-1" aria-hidden="true">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                placeholder="+60 12 345 6789"
                className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Job Title / Company Name */}
            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium mb-1">
                Job Title<span className="text-blue-300 ml-1" aria-hidden="true">*</span>
              </label>
              <input
                id="jobTitle"
                name="jobTitle"
                required
                placeholder="Job Title"
                className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium mb-1">
                Company Name<span className="text-blue-300 ml-1" aria-hidden="true">*</span>
              </label>
              <input
                id="companyName"
                name="companyName"
                autoComplete="organization"
                required
                placeholder="Company Name"
                className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Country (full) */}
            <div className="md:col-span-2">
              <label htmlFor="companyCountry" className="block text-sm font-medium mb-1">
                Company Country
              </label>
              <select
                id="companyCountry"
                name="companyCountry"
                defaultValue=""
                className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="" disabled>
                  Select a country
                </option>
                <option>Malaysia</option>
                <option>Singapore</option>
                <option>Indonesia</option>
                <option>Thailand</option>
                <option>Philippines</option>
                <option>Vietnam</option>
                <option>Other</option>
              </select>
            </div>

            {/* Company Type / Size */}
            <div>
              <label htmlFor="companyType" className="block text-sm font-medium mb-1">
                Company Type
              </label>
              <select
                id="companyType"
                name="companyType"
                defaultValue=""
                className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="" disabled>
                  Select type
                </option>
                <option>Brand / Advertiser</option>
                <option>Agency</option>
                <option>Tech / Platform</option>
                <option>Publisher</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="companySize" className="block text-sm font-medium mb-1">
                Company Size
              </label>
              <select
                id="companySize"
                name="companySize"
                defaultValue=""
                className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="" disabled>
                  Select size
                </option>
                <option>1–10</option>
                <option>11–50</option>
                <option>51–200</option>
                <option>201–500</option>
                <option>501–1000</option>
                <option>1000+</option>
              </select>
            </div>

            {/* Dietary restrictions */}
            <div className="md:col-span-2">
              <label htmlFor="dietary" className="block text-sm font-medium mb-1">
                Do you have any dietary restrictions?
              </label>
              <textarea
                id="dietary"
                name="dietary"
                rows={3}
                placeholder="e.g., vegetarian, no nuts"
                className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Checkboxes (custom) */}
          <div className="mt-6 space-y-4">
            {/* Terms (required) */}
            <label
              htmlFor="agreeTerms"
              className="flex items-start gap-3 cursor-pointer select-none"
            >
              <input id="agreeTerms" name="agreeTerms" type="checkbox" required className="peer sr-only" />
              <span
                aria-hidden
                className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-[4px]
                           border border-white/25 bg-white/10
                           peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-blue-400
                           peer-checked:bg-blue-600 peer-checked:border-blue-600"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="h-3.5 w-3.5 text-white opacity-0 transition-opacity duration-150 peer-checked:opacity-100"
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
              <span className="text-sm leading-snug">
                Yes, I have read and accepted the{" "}
                <span className="underline decoration-white/50">Event Terms and Conditions</span>.
              </span>
            </label>

            {/* Comms (optional) */}
            <label
              htmlFor="agreeComms"
              className="flex items-start gap-3 cursor-pointer select-none"
            >
              <input id="agreeComms" name="agreeComms" type="checkbox" className="peer sr-only" />
              <span
                aria-hidden
                className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-[4px]
                           border border-white/25 bg-white/10
                           peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-blue-400
                           peer-checked:bg-blue-600 peer-checked:border-blue-600"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="h-3.5 w-3.5 text-white opacity-0 transition-opacity duration-150 peer-checked:opacity-100"
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
              <span className="text-sm leading-snug">
                Yes, I would like to receive communications. I understand that I can opt out at any time.
              </span>
            </label>

            <p className="text-xs text-white/70 leading-snug">
              Submitting this form does not guarantee acceptance. An official confirmation will be sent once approved.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold shadow transition
                         focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Request Your Seat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
