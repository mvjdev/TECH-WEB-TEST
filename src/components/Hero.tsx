'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { FaCalendarAlt, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const letterContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#1c1c1c] relative overflow-hidden px-4 py-20">
      <motion.div
        className="flex flex-col items-center text-center max-w-5xl mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Pill */}
        <motion.div 
          className="flex items-center gap-3 bg-white rounded-full px-7 py-4 mb-10 shadow-[0_18px_48px_rgba(0,0,0,0.32),0_0_20px_rgba(113,221,174,0.4),0_0_40px_rgba(113,221,174,0.2)] overflow-hidden"
          variants={itemVariants}
        >
          <Image
            src="/assets/2_Logo_Bulle.png"
            alt="Logo"
            width={54}
            height={54}
            className="w-10 h-10 object-contain"
          />
          <span className="font-extrabold text-[#1c1c1c] uppercase text-2xl sm:text-base lg:text-3xl tracking-wide font-sans">
            CRÉER UN SITE WEB <span className="underline decoration-2 underline-offset-4">VRAIMENT</span> UNIQUE
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-8 max-w-4xl mx-auto"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
              },
            },
          }}
        >
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
            <AnimatedWord text="Votre" />
            <AnimatedWord text="site" className="text-[#71ddae]" />
            <AnimatedWord text="doit" />
            <AnimatedWord text="donner" className="text-[#71ddae]" />
            <AnimatedWord text="envie" className="text-[#71ddae]" />
            <AnimatedWord text="de" />
          </div>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-2">
            <AnimatedWord text="rester," className="text-[#71ddae]" />
            <AnimatedWord text="pas" />
            <AnimatedWord text="de" />
            <span className="relative flex gap-x-3">
              <AnimatedWord text="revenir" className="text-[#71ddae]" />
              <AnimatedWord text="en" className="text-white" />
              <span className="absolute left-0 top-1/2 w-full h-[4px] bg-[#1c1c1c] -translate-y-1/2 pointer-events-none"></span>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-2">
            <span className="relative">
               <AnimatedWord text="arrière" className="text-[#71ddae]" />
               <span className="absolute left-0 top-1/2 w-full h-[4px] bg-[#1c1c1c] -translate-y-1/2 pointer-events-none"></span>
            </span>
            <AnimatedWord text="." className="text-white" />
          </div>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="max-w-lg text-base font-medium text-white/80 sm:max-w-2xl sm:text-lg md:text-xl mb-12"
          variants={itemVariants}
        >
          Design moderne, SEO solide, Suivi complet : <br className="hidden sm:block" />
          on construit un site qui retient vos visiteurs et vous apporte des résultats.
        </motion.p>
      
        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative"
          variants={itemVariants}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(113, 221, 174, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#71ddae] to-[#2A9D7A] text-[#1c1c1c] font-extrabold rounded-lg text-xl sm:text-2xl shadow-lg w-full sm:w-auto"
          >
            <FaCalendarAlt className="text-xl" />
            Prendre RDV
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(113, 221, 174, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#71ddae] text-[#71ddae] font-extrabold rounded-lg text-base sm:text-lg w-full sm:w-auto hover:bg-[#71ddae]/10 transition-colors"
          >
            Découvrir nos projets
            <FaArrowDown />
          </motion.button>

           {/* Decorative Image */}
          <div className="absolute -bottom-14 -left-10 hidden lg:block pointer-events-none">
            <Image
              src="/assets/3_Un_Ptit_Click.png"
              alt="Un p'tit click ?"
              width={150}
              height={80}
              className="object-contain rotate-[-10deg]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const AnimatedWord = ({ text, className = "text-white" }: { text: string; className?: string }) => {
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.span 
      className={`inline-flex whitespace-pre ${className}`} 
      variants={wordVariants}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          whileHover={{ 
            scale: 1.2, 
            y: -4,
            rotate: Math.random() * 10 - 5,
            transition: { duration: 0.2 }
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default Hero;
