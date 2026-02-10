// src/app/terms/page.tsx
"use client";
import React from "react";
import Navbar from "@/components/Navbar";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-20">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-12 border-b border-white/10 pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                        Terms & Conditions
                    </h1>
                    <p className="text-gray-400">
                        Governing the use of Skyprime Hospitality services.
                    </p>
                </div>

                <div className="space-y-10 text-gray-300 leading-relaxed">

                    <section className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-yellow-500">01.</span> Booking & Payments
                        </h2>
                        <p className="mb-4">
                            All bookings for Meet & Greet, Limousine, or Lounge access must be made at least <strong>24 hours in advance</strong>.
                            Bookings made within 24 hours are subject to availability and a "Last Minute" surcharge.
                            Payment must be completed in full to confirm the reservation.
                        </p>
                    </section>

                    <section className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-yellow-500">02.</span> Meet & Greet Services
                        </h2>
                        <p>
                            Our staff will attempt to contact you upon landing. It is the passenger's responsibility to provide accurate flight details.
                            <strong>Fast-track support</strong> [cite: 9] is subject to airport security regulations and volume.
                            Porter assistance is included where explicitly stated; however, strict baggage security rules apply.
                        </p>
                    </section>

                    <section className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-yellow-500">03.</span> Limousine Transfers & Delays
                        </h2>
                        <p>
                            Skyprime Hospitality includes <strong>flight tracking for delays</strong>  with all Limousine bookings.
                            However, if a flight is delayed by more than 4 hours, a new booking may be required depending on vehicle availability.
                            Passengers must ensure they are ready at the designated pickup point.
                        </p>
                    </section>

                    <section className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-yellow-500">04.</span> Lounge & Hotel Access
                        </h2>
                        <p>
                            <strong>Airport Lounge Access</strong>  is valid for the duration specified in your booking (typically 3-4 hours).
                            <strong>Transit Hotel</strong> [cite: 31] bookings are for specific hourly blocks. Overstaying will incur additional charges.
                            Shower facilities [cite: 28] are subject to availability at the time of entry.
                        </p>
                    </section>

                    <section className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-yellow-500">05.</span> Cancellation Policy
                        </h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Cancellations  48 hours before service: <strong>100% Refund</strong>.</li>
                            <li>Cancellations 24-48 hours before service: <strong>50% Refund</strong>.</li>
                            <li>Cancellations &lt; 24 hours or No-Show: <strong>No Refund</strong>.</li>
                        </ul>
                    </section>

                </div>

                <div className="mt-12 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-sm text-yellow-200 text-center">
                    Last Updated: February 2026. Skyprime Hospitality reserves the right to amend these terms at any time.
                </div>
            </div>
        </main>
    );
}