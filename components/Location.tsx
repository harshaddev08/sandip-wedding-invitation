"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "./ui/button";

export default function Location() {
    const weddingLocation = {
        name: "Mu. Navagam (Bilkha)",
        city: "Junagadh, Gujarat",
        fullAddress: "Mu. Navagam (Bilkha), Junagadh, Gujarat",
        // You can replace this with actual coordinates if available
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Navagam+Bilkha+Junagadh+Gujarat",
    };

    return (
        <section className="py-20 px-4 bg-accent/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">લગ્ન સ્થળ</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-8" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Location Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-secondary/20">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 bg-primary/10 rounded-full">
                                    <MapPin className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif text-primary mb-2">{weddingLocation.name}</h3>
                                    <p className="text-lg text-muted-foreground">{weddingLocation.city}</p>
                                </div>
                            </div>

                            <p className="text-foreground/70 mb-6">
                                આ સુંદર સ્થળે અમારી સાથે જોડાઓ જ્યારે અમે પરિવાર અને મિત્રો સાથે અમારા ખાસ દિવસની ઉજવણી કરીએ છીએ.
                            </p>

                            <Button
                                variant="wedding"
                                size="lg"
                                className="w-full"
                                onClick={() => window.open(weddingLocation.mapUrl, '_blank')}
                            >
                                <Navigation className="w-5 h-5 mr-2" />
                                દિશા મેળવો
                            </Button>
                        </div>
                    </motion.div>

                    {/* Decorative Map Design */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-secondary/30 bg-gradient-to-br from-accent to-background">
                            {/* Decorative Map Pattern */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-full h-full">
                                    {/* Grid Pattern */}
                                    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#grid)" />
                                    </svg>

                                    {/* Center Pin */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            viewport={{ once: true }}
                                            className="relative"
                                        >
                                            {/* Pulsing Circle */}
                                            <motion.div
                                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="absolute inset-0 -m-8 rounded-full bg-primary"
                                            />

                                            {/* Pin Icon */}
                                            <div className="relative bg-primary text-white p-6 rounded-full shadow-2xl">
                                                <MapPin className="w-12 h-12" />
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Decorative Roads */}
                                    <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M 0 50 Q 50 30, 100 50" stroke="currentColor" strokeWidth="2" fill="none" className="text-secondary" />
                                        <path d="M 50 0 Q 30 50, 50 100" stroke="currentColor" strokeWidth="2" fill="none" className="text-secondary" />
                                    </svg>
                                </div>
                            </div>

                            {/* Location Label */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border-2 border-secondary/30">
                                <p className="font-serif text-primary font-semibold whitespace-nowrap">
                                    {weddingLocation.name}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
