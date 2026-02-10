"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Check, Plane, Car, Coffee, Bed } from "lucide-react";

const services = [
    {
        title: "Meet & Greet Services",
        icon: <Plane className="w-8 h-8 text-yellow-400" />,
        description: "Enjoy a smooth airport journey with personalized assistance from arrival to departure.",
        // UPDATED: Used your new greeting/handshake image
        image: "/pexels-sora-shimazaki-5668451.jpg",
        features: [
            "Warm welcome by trained staff",
            "Fast-track immigration support",
            "Buggy transfers to gates",
            "Porter assistance for bags",
        ],
        color: "from-yellow-500 to-amber-700",
    },
    {
        title: "Limousine Transfers",
        icon: <Car className="w-8 h-8 text-blue-400" />,
        description: "Travel in comfort and style with premium chauffeur-driven vehicles.",
        // UPDATED: Used your new white Limousine image
        image: "/pexels-thekameragrapher-33535299.jpg",
        features: [
            "Luxury sedans & SUVs",
            "Uniformed chauffeurs",
            "Flight tracking for delays",
            "Door-to-door convenience",
        ],
        color: "from-blue-500 to-indigo-700",
    },
    {
        title: "Airport Lounge Access",
        icon: <Coffee className="w-8 h-8 text-emerald-400" />,
        description: "Relax, refresh, and recharge before your flight in exclusive airport lounges.",
        // UPDATED: Used your new lounge/terminal view image
        image: "/pexels-hellojoshwithers-16739115.jpg",
        features: [
            "Food & Beverages included",
            "Shower facilities (select)",
            "High-speed Wi-Fi & Charging",
            "Quiet business zones",
        ],
        color: "from-emerald-500 to-green-700",
    },
    {
        title: "Airport Transit Hotels",
        icon: <Bed className="w-8 h-8 text-purple-400" />,
        description: "Rest and rejuvenate during long transits without leaving the airport.",
        // UPDATED: Used your new resort/pool image for relaxation
        image: "/pexels-grbr-snts-323519936-33881123.jpg",
        features: [
            "Hourly or short-stay bookings",
            "Private bathrooms & beds",
            "Easy access within terminal",
            "Flexible check-in/out",
        ],
        color: "from-purple-500 to-violet-700",
    },
];

export default function ServicesPage() {
    const handleBooking = (serviceName: string) => {
        const phone = "919999999999";
        const message = `Hello Skyprime, I am interested in booking *${serviceName}*. Please provide more details.`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <main className="min-h-screen bg-neutral-950 text-white pb-20">
            <Navbar />

            <div className="pt-32 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500"
                    >
                        Premium Airport Services
                    </motion.h1>
                    <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
                        Excellence in every detail. Discover our suite of luxury travel solutions designed for global travelers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            // UPDATED: Changed h-[480px] to min-h-[600px] so it expands on mobile
                            className="group relative min-h-[600px] md:h-[550px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col"
                        >
                            {/* BACKGROUND IMAGE */}
                            <div
                                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                                style={{ backgroundImage: `url(${service.image})` }}
                            />

                            {/* GLASS OVERLAY */}
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/80 to-black/20 group-hover:via-black/70 transition-all duration-300" />

                            <div className="relative z-20 h-full p-8 flex flex-col flex-grow">
                                {/* Header with Icon Only */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                                        {service.icon}
                                    </div>
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-yellow-500/80 border border-yellow-500/20 uppercase tracking-widest">
                                        Premium
                                    </span>
                                </div>

                                <h3 className="text-3xl font-bold mb-3 group-hover:text-yellow-500 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features Grid */}
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8">
                                    {service.features.map((feat, i) => (
                                        <li key={i} className="flex items-center gap-2 text-white/90 text-xs font-medium">
                                            <div className="bg-green-500/20 p-1 rounded-full shrink-0">
                                                <Check className="w-3 h-3 text-green-400" />
                                            </div>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                {/* Action Button - Pushed to bottom with mt-auto */}
                                <button
                                    onClick={() => handleBooking(service.title)}
                                    className={`w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r ${service.color} hover:brightness-110 shadow-lg transition-all active:scale-95 mt-auto`}
                                >
                                    Book with Skyprime
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}