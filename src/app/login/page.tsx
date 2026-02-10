// src/app/login/page.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // --- MOCK AUTHENTICATION LOGIC ---
        if (email === "admin@airport.com") {
            router.push("/admin"); // Redirects to Admin Dashboard
        } else {
            router.push("/"); // Redirects to Home (User View)
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">

            {/* Background Animated Blobs (The "Glow") */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-yellow-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />

            {/* The Glass Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-md p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-gray-400 text-sm">Access your specialized concierge portal.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">

                    {/* Email Input */}
                    <div className="relative group">
                        <Mail className="absolute left-4 top-3.5 text-gray-400 w-5 h-5 group-focus-within:text-yellow-400 transition" />
                        <input
                            type="email"
                            placeholder="admin@airport.com"
                            className="w-full bg-black/40 text-white pl-12 pr-4 py-3 rounded-lg border border-white/10 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition placeholder-gray-600"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative group">
                        <Lock className="absolute left-4 top-3.5 text-gray-400 w-5 h-5 group-focus-within:text-yellow-400 transition" />
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-black/40 text-white pl-12 pr-4 py-3 rounded-lg border border-white/10 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition placeholder-gray-600"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition flex justify-center items-center gap-2"
                    >
                        Sign In <ArrowRight className="w-5 h-5" />
                    </button>

                </form>

                <div className="mt-6 text-center text-xs text-gray-500">
                    <Link href="/" className="hover:text-white transition underline">
                        Back to Website
                    </Link>
                </div>

            </motion.div>
        </div>
    );
}