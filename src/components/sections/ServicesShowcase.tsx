"use client";
import Image from "next/image";

function PhoneRow() {
  return (
    <div className="flex items-end gap-1.5 mt-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-14 h-28 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm"
        />
      ))}
    </div>
  );
}

export function ServicesShowcase() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-[#5b1a8c] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5b1a8c]" />
          Services
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-gray-900 leading-snug">
          We deliver innovative technology solutions that empower businesses
          to{" "}
          <span className="text-[#5b1a8c]">
            grow, scale, and stay ahead in the digital era.
          </span>
        </h2>
      </div>

      <div
        className="max-w-7xl mx-auto rounded-3xl p-3 grid md:grid-cols-3 gap-3"
        style={{
          background: "linear-gradient(160deg, #2a0850 0%, #4b0277 100%)",
        }}
      >
        <div className="flex flex-col gap-3">
          <div className="rounded-2xl p-7 bg-white/5 border border-white/10 flex-1">
            <h3 className="text-white font-display font-semibold text-lg mb-2">
              Mobile App Development
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              From concept to launch, we build Android and iOS applications
              that are fast, functional, and user-friendly.
            </p>
            <PhoneRow />
          </div>
          <div className="rounded-2xl p-7 bg-white/5 border border-white/10 flex-1">
            <h3 className="text-white font-display font-semibold text-lg mb-2">
              AI Chatbot Development
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Enhance customer engagement with intelligent chatbots that
              provide instant support and automation.
            </p>
            <PhoneRow />
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden relative min-h-[320px] flex items-end p-7">
          <Image
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop"
            alt="Website development workspace"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c0136]/90 to-transparent" />
          <div className="relative z-10">
            <h3 className="text-white font-display font-semibold text-lg mb-2">
              Website Development
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              We design and develop responsive, high-performance websites
              tailored to your brand identity and business goals.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="rounded-2xl p-7 bg-white/5 border border-white/10 flex-1">
            <h3 className="text-white font-display font-semibold text-lg mb-2">
              Custom Delivery Solutions
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              We specialize in delivery system software for food courts,
              restaurants, and local businesses, including driver management.
            </p>
            <PhoneRow />
          </div>
          <div className="rounded-2xl overflow-hidden relative min-h-[160px] flex items-end p-7">
            <Image
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
              alt="UI/UX design on mobile"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c0136]/90 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-white font-display font-semibold text-lg mb-1">
                UI/UX & Branding
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Clean, modern, and user-focused designs that create memorable
                digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
