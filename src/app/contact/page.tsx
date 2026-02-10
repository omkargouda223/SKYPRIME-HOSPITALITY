// src/app/contact/page.tsx
"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-neutral-950 text-white pt-24">
            <Navbar />

            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Left Side: Info */}
                <div>
                    <div className="inline-block px-3 py-1 mb-6 border border-yellow-500/30 rounded-full bg-yellow-500/10 backdrop-blur-sm">
                        <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">
                            Skyprime Support
                        </span>
                    </div>

                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        Get in Touch
                    </h1>
                    <p className="text-gray-400 mb-12 text-lg">
                        We offer seamless, luxury-driven airport experiences designed for comfort, speed, and peace of mind.
                        Contact us for VIP bookings or corporate travel inquiries.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-4 group">
                            <div className="p-4 bg-white/5 rounded-full border border-white/10 group-hover:border-yellow-500/50 transition">
                                <Phone className="text-yellow-500 w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Phone / WhatsApp</h3>
                                <p className="text-gray-400">+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="p-4 bg-white/5 rounded-full border border-white/10 group-hover:border-yellow-500/50 transition">
                                <Mail className="text-yellow-500 w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Email</h3>
                                <p className="text-gray-400">bookings@skyprime.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="p-4 bg-white/5 rounded-full border border-white/10 group-hover:border-yellow-500/50 transition">
                                <MapPin className="text-yellow-500 w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Headquarters</h3>
                                <p className="text-gray-400">Skyprime Hospitality, International Terminal</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="p-4 bg-white/5 rounded-full border border-white/10 group-hover:border-yellow-500/50 transition">
                                <Clock className="text-yellow-500 w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Hours</h3>
                                <p className="text-gray-400">24/7 Operational Support</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm shadow-2xl">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-300">Full Name</label>
                            <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-yellow-500 outline-none transition" placeholder="e.g. Rahul Sharma" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-300">Email Address</label>
                            <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-yellow-500 outline-none transition" placeholder="rahul@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-300">Service Interest</label>
                            <select className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-yellow-500 outline-none transition">
                                <option>Meet & Greet Services</option>
                                <option>Limousine Transfers</option>
                                <option>Airport Lounge Access</option>
                                <option>Transit Hotels</option>
                                <option>Corporate / Bulk Booking</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-300">Message</label>
                            <textarea className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-yellow-500 outline-none h-32 transition" placeholder="Please provide flight details or special requests..."></textarea>
                        </div>
                        <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold py-4 rounded-lg transition shadow-[0_0_20px_rgba(250,204,21,0.3)]">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}