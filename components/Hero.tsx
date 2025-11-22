"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-background flex flex-col items-center justify-center text-center">
            {/* Background Pattern/Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0" />

            {/* Decorative Mandala (CSS only for now, or SVG) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 0 L100 100 M100 0 L0 100" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                </svg>
            </div>

            <div className="z-10 px-4 space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h2 className="text-xl md:text-2xl font-serif tracking-[0.2em] text-primary uppercase mb-4">
                        લગ્ન સમારોહ
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="space-y-2"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-primary font-bold">
                        સંદીપ
                    </h1>
                    <span className="text-4xl md:text-6xl font-serif text-secondary block my-4">&</span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-primary font-bold">
                        સરિતા
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="space-y-6"
                >
                    <p className="text-xl md:text-2xl font-sans text-foreground/80 tracking-wide">
                        ૩૦ નવેમ્બર, ૨૦૨૫ • મુ. બેલા, જૂનાગઢ, ગુજરાત
                    </p>

                    <div className="flex justify-center items-center pt-8">
                        <Button
                            variant="wedding"
                            size="lg"
                            className="min-w-[200px]"
                            onClick={() => {
                                const eventsSection = document.getElementById('events');
                                eventsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                        >
                            અવસરો જુઓ
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary cursor-pointer"
            >
                <ChevronDown className="w-8 h-8" />
            </motion.div>
        </section>
    );
}
