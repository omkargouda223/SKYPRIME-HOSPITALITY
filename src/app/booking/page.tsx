"use client";
import React, { useState, useEffect, Suspense } from "react";
import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { User, Mail, Phone, Plane, Calendar, MapPin, Users, CheckCircle } from "lucide-react";

// Wrap the form in Suspense to handle searchParams safely
export default function BookingPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">Loading...</div>}>
            <BookingForm />
        </Suspense>
    );
}

function BookingForm() {
    const searchParams = useSearchParams();
    const serviceName = searchParams.get("service") || "General Inquiry";

    const [formData, setFormData] = useState({
        fullName: "",
        whatsapp: "",
        email: "",
        travelType: "Arrival",
        airport: "",
        date: "",
        passengers: "1"
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct the detailed message
        const message = `*NEW BOOKING REQUEST* ✈️%0A%0A` +
            `*Section 1: Contact* 👤%0A` +
            `Name: ${formData.fullName}%0A` +
            `WhatsApp: ${formData.whatsapp}%0A` +
            `Email: ${formData.email}%0A%0A` +
            `*Section 2: Travel Snapshot* 🌍%0A` +
            `Service: ${serviceName}%0A` +
            `Type: ${formData.travelType}%0A` +
            `Airport: ${formData.airport}%0A` +
            `Date: ${formData.date}%0A` +
            `Passengers: ${formData.passengers}`;

        // Redirect to WhatsApp with the pre-filled form data
        const phone = "919999999999"; // Replace with client's number
        const url = `https://wa.me/${phone}?text=${message}`;
        window.open(url, "_blank");
    };

    return (
        <main className="min-h-screen bg-neutral-950 text-white selection:bg-yellow-500 selection:text-black pb-20">
            <Navbar />

            <div className="pt-32 px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <span className="text-yellow-500 font-bold tracking-[0.2em] text-xs uppercase">Premium Reservations</span>
                    <h1 className="text-3xl md:text-5xl font-bold mt-2">Secure Your Service</h1>
                    <p className="text-neutral-400 mt-4">You are booking: <span className="text-white font-bold">{serviceName}</span></p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                >
                    {/* SECTION 1: BASIC CONTACT */}
                    <div className="bg-neutral-900/50 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                            <div className="bg-yellow-500/10 p-2 rounded-lg text-yellow-500"><User className="w-5 h-5" /></div>
                            Section 1: Basic Contact <span className="text-red-500 text-sm ml-2 font-normal">(Mandatory)</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                    <input
                                        type="text" name="fullName" required
                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-yellow-500 focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">WhatsApp Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                    <input
                                        type="tel" name="whatsapp" required
                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-yellow-500 focus:outline-none transition-colors"
                                        placeholder="+91 99999 99999"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                    <input
                                        type="email" name="email" required
                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-yellow-500 focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2: TRAVEL SNAPSHOT */}
                    <div className="bg-neutral-900/50 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                            <div className="bg-blue-500/10 p-2 rounded-lg text-blue-500"><Plane className="w-5 h-5" /></div>
                            Section 2: Travel Snapshot
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Travel Type</label>
                                <div className="relative">
                                    <select
                                        name="travelType"
                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 px-4 focus:border-blue-500 focus:outline-none transition-colors appearance-none"
                                        onChange={handleChange}
                                    >
                                        <option>Meet & Greet Services</option>
                                        <option>Limousine Transfers</option>
                                        <option>Airport Lounge Access</option>
                                        <option>Airport Transit Hotels</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">▼</div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Airport</label>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                    <input
                                        type="text" name="airport" required
                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-blue-500 focus:outline-none transition-colors"
                                        placeholder="e.g. DXB, LHR, BOM"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Travel Date</label>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                    <input
                                        type="date" name="date" required
                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-blue-500 focus:outline-none transition-colors text-white/80" // Calendar icon color fix
                                        style={{ colorScheme: "dark" }}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Passengers</label>
                                <div className="relative">
                                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                    <input
                                        type="number" name="passengers" min="1" required
                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-blue-500 focus:outline-none transition-colors"
                                        defaultValue="1"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="w-full py-5 bg-yellow-500 text-black font-black text-lg rounded-xl hover:bg-yellow-400 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2">
                        Confirm Request <CheckCircle className="w-5 h-5" />
                    </button>

                </motion.form>
            </div>
        </main>
    );
}
