import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#050508] border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
                <h2 className="text-2xl font-pixel text-primary mb-6 pixel-shadow">RAJUICE SPACE</h2>
                <p className="text-gray-500 text-xs font-mono text-center leading-loose">
                    © {new Date().getFullYear()} RAJUICE.XYZ
                </p>
            </div>
        </footer>
    )
}
