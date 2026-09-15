"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section className="py-10 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-[#5b1a8c] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5b1a8c]" />
            Who We Are
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#2f0a5c]">
            We build the digital tools that power your growth.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl overflow-hidden min-h-[420px] relative">
            <Image
              src="/images/about-1.png"
              alt="Knockit Technology team reviewing a project"
              fill
              className="object-cover"
            />
          </div>

          <div
            className="rounded-3xl p-10 text-white flex flex-col"
            style={{
              background: "linear-gradient(160deg, #3d0a6b 0%, #1c0136 100%)",
            }}
          >
            <div className="flex items-center gap-8 pb-6 mb-6 border-b border-white/15">
              <div>
                <div className="text-3xl font-display font-semibold">02</div>
                <div className="text-xs text-white/60 mt-1">
                  Years
                  <br />
                  in Business
                </div>
              </div>
              <div className="w-px h-10 bg-white/15" />
              <div>
                <div className="text-3xl font-display font-semibold">8+</div>
                <div className="text-xs text-white/60 mt-1">
                  Successful
                  <br />
                  Projects
                </div>
              </div>
            </div>

            <p className="text-lg font-medium leading-relaxed">
              Knockit Technology is a UK-based tech solutions company
              dedicated to delivering innovative and reliable digital
              products.
            </p>
            <p className="text-sm text-white/60 mt-4 leading-relaxed">
              Knockit Technology is a UK-based tech solutions company
              dedicated to delivering innovative and reliable digital
              products.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-3">
                {[
                  "1494790108377-be9c29b29330",
                  "1500648767791-00dcc994a43e",
                  "1472099645785-5658abf4ff4e",
                  "1633332755192-727a05c4013d",
                ].map((id) => (
                  <Image
                    key={id}
                    src={`https://images.unsplash.com/photo-${id}?q=80&w=100&auto=format&fit=crop`}
                    alt="Client"
                    width={36}
                    height={36}
                    className="rounded-full border-2 border-[#1c0136] object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="text-xl font-display font-semibold">98%</div>
                <div className="text-xs text-white/60">
                  Client Satisfaction
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-medium mt-8 hover:gap-2.5 transition-all"
            >
              Read More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
