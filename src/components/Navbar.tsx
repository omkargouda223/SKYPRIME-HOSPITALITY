"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full h-20 z-50 px-6 md:px-16 py-6 bg-black/40 backdrop-blur-md border-b border-white/10 flex justify-between items-center">

            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-4 group z-50">
                <div className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-110">
                    <Image
                        src="/lo.png"
                        alt="Skyprime Hospitality Logo"
                        width={80}
                        height={80}
                        priority
                        unoptimized
                        className="object-contain"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-white font-bold text-lg md:text-2xl tracking-tighter leading-none">
                        SKYPRIME
                    </span>
                    <span className="text-yellow-500 font-bold text-xs md:text-sm tracking-[0.3em] leading-none">
                        HOSPITALITY
                    </span>
                </div>
            </Link>

            {/* Desktop Links (Hidden on Mobile) */}
            <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-300">
                <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
                <Link href="/services" className="hover:text-yellow-400 transition-colors">Services</Link>
                <Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
            </div>

            {/* Desktop Login Button & Mobile Toggle */}
            <div className="flex items-center gap-4 z-50">
                {/* Login Button (Desktop Only) */}
                <Link href="/login" className="hidden md:block">
                    <button className="px-6 py-2 bg-white text-black font-black text-xs md:text-sm rounded-full hover:bg-yellow-500 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95">
                        LOGIN
                    </button>
                </Link>

                {/* Hamburger Icon */}
                <button
                    className="md:hidden text-white hover:text-yellow-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-neutral-950/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 md:hidden z-40">
                    <Link
                        href="/"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl font-bold text-white uppercase tracking-widest hover:text-yellow-500 transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="/services"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl font-bold text-white uppercase tracking-widest hover:text-yellow-500 transition-colors"
                    >
                        Services
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl font-bold text-white uppercase tracking-widest hover:text-yellow-500 transition-colors"
                    >
                        Contact
                    </Link>

                    {/* NEW: Mobile Login Button */}
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                        <button className="px-10 py-4 bg-yellow-500 text-black font-black text-lg rounded-full shadow-[0_0_30px_rgba(250,204,21,0.4)] active:scale-95">
                            LOGIN
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
}