"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-[#0a0a0f]/95 backdrop-blur-md z-50 border-b-4 border-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="text-xl md:text-2xl text-primary hover:text-accent transition-colors drop-shadow-[0_2px_0_rgba(255,255,255,1)] font-pixel">
                        RAJUICE.XYZ
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {["Home", "About", "Work", "Contact"].map((item) => (
                                <Link
                                    key={item}
                                    href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                                    className="text-white hover:text-secondary px-3 py-2 text-sm transition-colors hover:bg-white/5 border border-transparent hover:border-white/20 font-pixel uppercase"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-primary transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-[#0a0a0f] border-b-4 border-secondary">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {["Home", "About", "Work", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                                className="text-white block px-3 py-2 rounded-md text-base font-pixel uppercase hover:text-secondary hover:bg-white/5"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
