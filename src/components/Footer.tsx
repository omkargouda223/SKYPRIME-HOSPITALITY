// src/components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Brand Column */}
                <div>
                    {/* Replaced Icon with Logo Image */}
                    <div className="mb-6 relative h-20 w-48">
                        <Image
                            src="/lo.png"
                            alt="Skyprime Hospitality"
                            fill
                            className="object-contain object-left"
                        />
                    </div>
                    <p className="text-gray-400 text-sm">
                        Seamless, luxury-driven airport experiences designed for comfort, speed, and peace of mind.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-bold mb-4 text-yellow-500">Explore</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                        <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition">Contact Support</Link></li>
                        <li><Link href="/login" className="hover:text-white transition">Staff Login</Link></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="font-bold mb-4 text-yellow-500">Legal</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
                        <li><Link href="/terms" className="hover:text-white transition">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-white transition">Refund Policy</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-bold mb-4 text-yellow-500">Contact</h3>
                    <p className="text-gray-400 text-sm mb-2">bookings@skyprime.com</p>
                    <p className="text-gray-400 text-sm mb-4">+91 98765 43210</p>
                    <div className="flex gap-4">
                        <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition" />
                        <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition" />
                        <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition" />
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-600 text-xs mt-16 pt-8 border-t border-white/5">
                © 2026 Skyprime Hospitality. All rights reserved.
            </div>
        </footer>
    );
}