import React from "react";
import { motion } from "framer-motion";
import Image from "../../components/AppImage";

const ClientGrid = ({ clients }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl"
    >
      {clients.map((client) => (
        <motion.div
          key={client.id}
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.04, boxShadow: "0 8px 32px #0003" }}
          className="group bg-white/90 dark:bg-card/90 border border-border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 cursor-pointer relative overflow-hidden"
        >
          <div className="flex items-center space-x-4 mb-4">
            <Image src={client.logo} alt={client.name} className="w-14 h-14 object-contain rounded-xl bg-white shadow" />
            <div>
              <h2 className="text-xl font-bold text-primary mb-1">{client.name}</h2>
              <span className="text-xs text-gray-500">{client.city}</span>
            </div>
          </div>
          <Image src={client.images[0]} alt={client.name + ' project'} className="w-full h-40 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-gray-700 dark:text-gray-200 mb-3">{client.description}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">{client.category}</span>
            <span className="px-2 py-1 bg-surface/90 text-text-primary text-xs font-medium rounded-full">{client.year}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ClientGrid;
