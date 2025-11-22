"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { MapPin, Clock, Calendar } from "lucide-react";

const events = [
    {
        title: "સાંજી ના ગીત",
        date: "શુક્રવાર, ૨૮ નવેમ્બર, ૨૦૨૫",
        time: "રાત્રે ૯:૦૦ વાગ્યાથી",
        venue: "મુ. બેલા (બાલ ભવન પાછળ), જૂનાગઢ",
        description: "પરંપરાગત ગીતો અને ઉજવણીની સાંજ.",
        color: "bg-purple-50 border-purple-200",
    },
    {
        title: "મંડપ રોપણ",
        date: "શનિવાર, ૨૯ નવેમ્બર, ૨૦૨૫",
        time: "સવારે ૯:૦૦ વાગ્યે",
        venue: "મુ. બેલા (બાલ ભવન પાછળ), જૂનાગઢ",
        description: "લગ્ન વિધિની શુભ શરૂઆત.",
        color: "bg-yellow-50 border-yellow-200",
    },
    {
        title: "ભોજન સમારંભ",
        date: "શનિવાર, ૨૯ નવેમ્બર, ૨૦૨૫",
        time: "સવારે ૧૧:૩૦ વાગ્યે",
        venue: "મુ. બેલા (બાલ ભવન પાછળ), જૂનાગઢ",
        description: "પરિવાર અને મિત્રો માટે ભવ્ય ભોજન.",
        color: "bg-orange-50 border-orange-200",
    },
    {
        title: "ડાંડિયા રાસ",
        date: "શનિવાર, ૨૯ નવેમ્બર, ૨૦૨૫",
        time: "રાત્રે ૯:૦૦ વાગ્યાથી",
        venue: "મુ. બેલા (બાલ ભવન પાછળ), જૂનાગઢ",
        description: "ગરબા અને આનંદની રાત્રિ.",
        color: "bg-pink-50 border-pink-200",
    },
    {
        title: "જાન પ્રસ્થાન",
        date: "રવિવાર, ૩૦ નવેમ્બર, ૨૦૨૫",
        time: "સવારે (શુભ ચોઘડિયો)",
        venue: "મુ. બેલાથી પ્રસ્થાન",
        description: "વરરાજાની જાન લગ્ન સ્થળ તરફ પ્રસ્થાન કરે છે.",
        color: "bg-blue-50 border-blue-200",
    },
    {
        title: "હસ્ત મેળાપ (લગ્ન)",
        date: "રવિવાર, ૩૦ નવેમ્બર, ૨૦૨૫",
        time: "સવારે (શુભ ચોઘડિયે)",
        venue: "મુ. નવાગામ (બિલખા), જૂનાગઢ",
        description: "સંદીપ અને સરિતાનું પવિત્ર મિલન.",
        color: "bg-red-50 border-red-200",
    },
];

export default function EventDetails() {
    return (
        <section id="events" className="py-20 px-4 bg-accent/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">ઉમંગ ના અવસરો</h2>
                    <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
                        કૃપા કરીને અમારા પ્રેમની ઉજવણીમાં શુભ સમારોહો માટે જોડાઓ.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className={`h-full hover:shadow-lg transition-shadow duration-300 border-2 ${event.color}`}>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-serif text-primary">{event.title}</CardTitle>
                                    <CardDescription className="text-base mt-2">{event.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center text-foreground/80">
                                        <Calendar className="w-5 h-5 mr-3 text-secondary" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center text-foreground/80">
                                        <Clock className="w-5 h-5 mr-3 text-secondary" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center text-foreground/80">
                                        <MapPin className="w-5 h-5 mr-3 text-secondary" />
                                        <span>{event.venue}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
