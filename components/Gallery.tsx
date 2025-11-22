"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder images - replace with actual photos of the couple
const photos = [
  { src: "/placeholder-1.jpg", alt: "Couple Photo 1", className: "col-span-1 md:col-span-2 row-span-2" },
  { src: "/placeholder-2.jpg", alt: "Couple Photo 2", className: "col-span-1" },
  { src: "/placeholder-3.jpg", alt: "Couple Photo 3", className: "col-span-1" },
  { src: "/placeholder-4.jpg", alt: "Couple Photo 4", className: "col-span-1" },
  { src: "/placeholder-5.jpg", alt: "Couple Photo 5", className: "col-span-1" },
];

export default function Gallery() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">ફોટો ગેલેરી</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground">અમારી યાદગાર ક્ષણો.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-xl bg-muted ${photo.className}`}
            >
              {/* Using a div placeholder if image is missing, otherwise use Image component */}
              <div className="absolute inset-0 flex items-center justify-center bg-secondary/10 text-secondary font-serif text-xl">
                Photo {index + 1}
              </div>
              {/* Uncomment below when real images are added to public folder */}
              {/* <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
