"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-20 px-4 bg-background">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">|| નિમંત્રક ||</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-12" />

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border-2 border-secondary/20">
                        <div className="space-y-6 text-center">
                            <div>
                                <p className="text-2xl md:text-3xl font-serif text-primary mb-2">
                                    શ્રી મનસુખભાઈ ગોવિંદભાઈ ઝાલા
                                </p>
                                <p className="text-lg md:text-xl text-foreground/80">
                                    મુ. બેલા (બાલ ભવન પાછળ),
                                </p>
                                <p className="text-lg md:text-xl text-foreground/80 mb-6">
                                    તા. જુ. જૂનાગઢ.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                                <a
                                    href="tel:9537064332"
                                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span className="text-lg font-semibold">મો.૯૫૩૭૦૬૪૩૩૨</span>
                                </a>
                                <span className="hidden sm:inline text-muted-foreground">/</span>
                                <a
                                    href="tel:6353320440"
                                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span className="text-lg font-semibold">૬૩૫૩૩૨૦૪૪૦</span>
                                </a>
                            </div>

                            <div className="pt-6 border-t-2 border-secondary/20 mt-8">
                                <p className="text-base md:text-lg text-muted-foreground italic">
                                    આપના આશીર્વાદ અને શુભેચ્છાઓની રાહ જોઈએ છીએ
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
