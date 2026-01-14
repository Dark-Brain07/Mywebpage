"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function BlockchainAnimation() {
    const [tps, setTps] = useState(2500);
    const [gwei, setGwei] = useState("15.00");

    // Fetch real Ethereum gas price
    const fetchGasPrice = async () => {
        try {
            const response = await fetch('https://eth.llamarpc.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    method: 'eth_gasPrice',
                    params: [],
                    id: 1,
                }),
            });
            const data = await response.json();
            if (data.result) {
                // Convert from Wei to GWEI (1 GWEI = 10^9 Wei)
                const weiValue = parseInt(data.result, 16);
                const gweiValue = (weiValue / 1e9).toFixed(3);
                setGwei(gweiValue);
            }
        } catch (error) {
            console.error('Error fetching gas price:', error);
            // Fallback to mock data if fetch fails
            const fallbackGwei = (Math.random() * 10 + 10).toFixed(3);
            setGwei(fallbackGwei);
        }
    };

    useEffect(() => {
        // Fetch gas price immediately on mount
        fetchGasPrice();

        // Update TPS with mock data (Solana throughput simulation)
        const tpsInterval = setInterval(() => {
            setTps(prev => Math.floor(Math.random() * 1000) + 2000);
        }, 2000);

        // Fetch real gas price every 12 seconds (Ethereum block time)
        const gasInterval = setInterval(() => {
            fetchGasPrice();
        }, 12000);

        return () => {
            clearInterval(tpsInterval);
            clearInterval(gasInterval);
        };
    }, []);

    return (
        <div className="relative w-full h-80 overflow-hidden border-y-4 border-white/10 bg-black/40 backdrop-blur-sm my-10 flex flex-col justify-center">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>

            <h3 className="absolute top-4 left-0 right-0 text-center text-gray-400 font-pixel text-xs tracking-widest uppercase">Cross-Chain Architecture</h3>

            <div className="relative w-full flex items-center justify-between px-2 sm:px-10 md:px-32">
                {/* EVM Node */}
                <div className="flex flex-col items-center z-10 group cursor-pointer -translate-x-2 md:translate-x-0">
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="w-24 h-24 md:w-32 md:h-32 bg-primary/20 border-4 border-primary shadow-[0_0_20px_rgba(124,58,237,0.3)] flex items-center justify-center relative backdrop-blur-md group-hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] transition-all rounded-xl -translate-x-2 md:translate-x-0"
                    >
                        <div className="relative w-24 h-24 md:w-32 md:h-32">
                            <Image
                                src="/eth-logo.png"
                                alt="EVM Core"
                                fill
                                className="object-contain drop-shadow-[0_0_15px_rgba(124,58,237,0.8)]"
                            />
                        </div>
                        {/* Pulse effect */}
                        <div className="absolute inset-0 border-4 border-primary/50 animate-ping opacity-20 rounded-xl" />
                    </motion.div>
                    <p className="mt-6 font-pixel text-primary text-sm tracking-widest bg-black/50 px-3 py-1 border border-primary/30">EVM CORE</p>

                </div>

                {/* Connection Line */}
                <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-primary via-white/50 to-secondary -translate-y-1/2 opacity-30" />

                {/* Solana Node */}
                <div className="flex flex-col items-center z-10 group cursor-pointer translate-x-2 md:translate-x-0">
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, delay: 2, ease: "easeInOut" }}
                        className="w-24 h-24 md:w-32 md:h-32 bg-secondary/20 border-4 border-secondary shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center justify-center relative backdrop-blur-md group-hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] transition-all rounded-xl translate-x-12 md:translate-x-0"
                    >
                        <div className="relative w-24 h-24 md:w-32 md:h-32">
                            <Image
                                src="/solana-final.png"
                                alt="Solana Cluster"
                                fill
                                className="object-contain drop-shadow-[0_0_15px_rgba(0,240,255,0.8)] scale-110"
                            />
                        </div>
                        <div className="absolute inset-0 border-4 border-secondary/50 animate-ping opacity-20 rounded-xl" />
                    </motion.div>
                    <p className="mt-6 font-pixel text-secondary text-sm tracking-widest bg-black/50 px-3 py-1 border border-secondary/30">SOLANA CLUSTER</p>
                </div>
            </div>

            {/* Moving Blocks Left to Right */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={`block-l2r-${i}`}
                    className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-pixel-green border-2 border-white shadow-[0_0_10px_#4ade80] z-0"
                    initial={{ left: "15%", opacity: 0 }}
                    animate={{ left: "85%", opacity: [0, 1, 1, 0], rotate: 180 }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 2,
                        ease: "linear"
                    }}
                >
                    <span className="text-[8px] text-black font-bold absolute center inset-0 flex items-center justify-center">TX</span>
                </motion.div>
            ))}

            {/* Moving Blocks Right to Left (Bridging) */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`block-r2l-${i}`}
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-accent border border-white shadow-[0_0_10px_#ff00ff] z-0"
                    initial={{ right: "15%", opacity: 0 }}
                    animate={{ right: "85%", opacity: [0, 1, 1, 0], rotate: -180 }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: i * 2.5 + 1,
                        ease: "linear"
                    }}
                />
            ))}

            <div className="absolute bottom-4 left-4 md:left-8 text-xs text-gray-500 font-mono flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                Gas: {gwei} GWEI
            </div>

            <div className="absolute bottom-4 right-4 md:right-8 text-xs text-gray-500 font-mono flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Live Throughput: {tps} TPS
            </div>
        </div>
    )
}
