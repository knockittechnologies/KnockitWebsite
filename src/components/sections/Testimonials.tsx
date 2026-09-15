"use client";
import { Star } from "lucide-react";

const testimonials = [
  {
    title: "CRM Customization",
    quote:
      "They built a fully customised CRM exactly how we needed it, involving us at every stage. The whole process was smooth, and it's made running our business much more efficient.",
    name: "Bobby Dhunay",
    company: "Sentrix Director",
    initials: "SX",
  },
  {
    title: "Seamless Order Flow",
    quote:
      "They created a system that handles both click & collect and car delivery seamlessly. Orders are faster, customers are happier, and it's made a big difference to how we operate daily.",
    name: "Evelyn R",
    company: "Lunar Park",
    initials: "LP",
  },
  {
    title: "Ordering Systems",
    quote:
      "They delivered a simple and effective ordering system for click & collect and takeaway. It's easy for our staff to use and makes ordering quick and convenient for our customers.",
    name: "Evelyn R",
    company: "Juice Planet",
    initials: "JP",
  },
  {
    title: "Flawless Cloud Migration",
    quote:
      "They handled our migration from Google Workspace to Microsoft 365 professionally with no disruption. Everything was transferred securely, and our team now works more efficiently.",
    name: "Bobby Dhunay",
    company: "Telcam Director",
    initials: "TC",
  },
  {
    title: "Ordering Systems",
    quote:
      "They delivered a simple and effective ordering system for click & collect and takeaway. It's easy for our staff to use and makes ordering quick and convenient for our customers.",
    name: "Evelyn R",
    company: "The Fort Park",
    initials: "TF",
  },
  {
    title: "Flawless Cloud Migration",
    quote:
      "They handled our migration from Google Workspace to Microsoft 365 professionally with no disruption. Everything was transferred securely, and our team now works more efficiently.",
    name: "Evelyn R",
    company: "Andalusia Food Park",
    initials: "AF",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-[#5b1a8c] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5b1a8c]" />
          Client Stories
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#2f0a5c]">
          Hear what Clients love about our Service
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-2xl p-7 bg-gray-50 border border-gray-100"
          >
            <h3 className="font-display font-semibold text-gray-900 mb-3">
              {t.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              {t.quote}
            </p>
            <div className="flex gap-0.5 mb-5">
              {[...Array(5)].map((_, s) => (
                <Star
                  key={s}
                  size={14}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#2f0a5c] text-white text-xs font-bold flex items-center justify-center">
                {t.initials}
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">
                  {t.name}
                </div>
                <div className="text-xs text-gray-500">{t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
