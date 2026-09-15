"use client";
import Image from "next/image";
import {
  BadgePoundSterling,
  HeadphonesIcon,
  Gauge,
  TrendingUp,
} from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-[#5b1a8c] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5b1a8c]" />
          Why Knockit
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#2f0a5c] mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          We&apos;re proud to work with forward-thinking businesses that trust
          us to deliver their digital transformation.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
        <div
          className="rounded-3xl p-8 text-white min-h-[220px]"
          style={{ background: "linear-gradient(160deg, #3d0a6b, #1c0136)" }}
        >
          <BadgePoundSterling className="mb-6" size={26} />
          <h3 className="font-display font-semibold text-lg mb-2">
            Affordable pricing, tailored to your needs
          </h3>
          <p className="text-sm text-white/60 leading-relaxed">
            Built a full system plus setup and maintenance for vendors.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden relative min-h-[220px]">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=700&auto=format&fit=crop"
            alt="Developer workspace"
            fill
            className="object-cover"
          />
        </div>

        <div
          className="rounded-3xl p-8 text-white min-h-[220px]"
          style={{ background: "linear-gradient(160deg, #3d0a6b, #1c0136)" }}
        >
          <HeadphonesIcon className="mb-6" size={26} />
          <h3 className="font-display font-semibold text-lg mb-2">
            Dedicated support team
          </h3>
          <p className="text-sm text-white/60 leading-relaxed">
            Built a full system plus setup and maintenance for vendors.
          </p>
        </div>

        <div
          className="rounded-3xl p-8 text-white min-h-[220px]"
          style={{ background: "linear-gradient(160deg, #3d0a6b, #1c0136)" }}
        >
          <Gauge className="mb-6" size={26} />
          <h3 className="font-display font-semibold text-lg mb-2">
            Scalable technology for future growth
          </h3>
          <p className="text-sm text-white/60 leading-relaxed">
            Built a full system plus setup and maintenance for vendors.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden relative min-h-[220px]">
          <Image
            src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=700&auto=format&fit=crop"
            alt="Social media apps on phone"
            fill
            className="object-cover"
          />
        </div>

        <div
          className="rounded-3xl p-8 text-white min-h-[220px] flex flex-col justify-between"
          style={{ background: "linear-gradient(160deg, #3d0a6b, #1c0136)" }}
        >
          <div>
            <TrendingUp className="mb-6" size={26} />
            <h3 className="font-display font-semibold text-lg mb-2">
              Proven track record with food parks and delivery ecosystems
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Built a full system plus setup and maintenance for vendors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
