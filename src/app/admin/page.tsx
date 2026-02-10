"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Calendar,
    LogOut,
    Clock,
    CheckCircle2,
    CircleEllipsis,
    Plane
} from "lucide-react";

export default function AdminDashboard() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Booking Data with Confirmation Times
    const bookings = [
        {
            customer: "Rahul Sharma",
            service: "Meet & Greet",
            reqTime: "10:30 AM",
            status: "Confirmed",
            confTime: "10:35 AM", // Time when ticket was confirmed
            amount: "₹4,999"
        },
        {
            customer: "Sarah Jenkins",
            service: "Lounge Access",
            reqTime: "11:15 AM",
            status: "Pending",
            confTime: null,
            amount: "₹2,999"
        },
        {
            customer: "Vikram Singh",
            service: "Limousine Transfer",
            reqTime: "01:45 PM",
            status: "Confirmed",
            confTime: "01:50 PM", // Time when ticket was confirmed
            amount: "₹3,499"
        },
        {
            customer: "Elena Rossi",
            service: "Transit Hotel",
            reqTime: "08:00 PM",
            status: "Confirmed",
            confTime: "08:12 PM", // Time when ticket was confirmed
            amount: "₹5,999"
        },
    ];

    if (!mounted) return <div className="min-h-screen bg-neutral-900" />;

    return (
        <div className="min-h-screen bg-neutral-950 text-white flex flex-col">

            {/* Header / Top Nav */}
            <nav className="w-full border-b border-white/5 bg-black/50 backdrop-blur-md p-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="bg-yellow-500 p-2 rounded-lg">
                        <Plane className="w-5 h-5 text-black" />
                    </div>
                    <h2 className="text-xl font-bold tracking-tight">
                        Skyprime <span className="text-yellow-500">Admin Portal</span>
                    </h2>
                </div>
                <Link href="/">
                    <button className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full hover:bg-red-500/20 transition text-sm font-bold">
                        <LogOut className="w-4 h-4" /> Logout
                    </button>
                </Link>
            </nav>

            <main className="flex-1 p-6 md:p-12 max-w-7xl mx-auto w-full">

                {/* Stats Header */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="p-8 bg-neutral-900 border border-white/10 rounded-3xl">
                        <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-2">Active Bookings</p>
                        <h3 className="text-4xl font-bold">12</h3>
                    </div>
                    <div className="p-8 bg-neutral-900 border border-white/10 rounded-3xl">
                        <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-2">Today's Revenue</p>
                        <h3 className="text-4xl font-bold text-green-500">₹45,000</h3>
                    </div>
                    <div className="p-8 bg-neutral-900 border border-white/10 rounded-3xl">
                        <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-2">Pending Tasks</p>
                        <h3 className="text-4xl font-bold text-yellow-500">03</h3>
                    </div>
                </div>

                {/* Main Table Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-neutral-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
                >
                    <div className="p-8 border-b border-white/5 flex justify-between items-center">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-yellow-500" /> Recent Booking Traffic
                        </h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 text-neutral-400 text-[10px] uppercase tracking-[0.2em]">
                                    <th className="p-6">Customer</th>
                                    <th className="p-6">Service Type</th>
                                    <th className="p-6 text-center">Travel Time</th>
                                    <th className="p-6 text-center">Status</th>
                                    <th className="p-6 text-center">Confirmed At</th>
                                    <th className="p-6 text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {bookings.map((book, i) => (
                                    <tr key={i} className="hover:bg-white/5 transition-colors group">
                                        <td className="p-6">
                                            <p className="font-bold text-white group-hover:text-yellow-500 transition-colors">{book.customer}</p>
                                        </td>
                                        <td className="p-6 text-neutral-400 text-sm font-medium">{book.service}</td>
                                        <td className="p-6">
                                            <div className="flex items-center justify-center gap-2 text-xs font-mono text-neutral-300 bg-black/40 py-1.5 rounded-full border border-white/5">
                                                <Clock className="w-3 h-3 text-yellow-500" /> {book.reqTime}
                                            </div>
                                        </td>
                                        <td className="p-6 text-center">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${book.status === 'Confirmed' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
                                                }`}>
                                                {book.status === 'Confirmed' ? <CheckCircle2 className="w-3 h-3" /> : <CircleEllipsis className="w-3 h-3" />}
                                                {book.status}
                                            </span>
                                        </td>
                                        <td className="p-6 text-center">
                                            {book.confTime ? (
                                                <span className="text-xs font-bold text-green-500/80 bg-green-500/5 px-3 py-1 rounded-md border border-green-500/10">
                                                    {book.confTime}
                                                </span>
                                            ) : (
                                                <span className="text-neutral-600 text-xs italic">Awaiting...</span>
                                            )}
                                        </td>
                                        <td className="p-6 text-right font-black text-white">{book.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}