"use client";

import { useState } from "react";
import GithubIcon from "@/assets/icons/github";
import JavascriptIcon from "@/assets/icons/javascript";
import MailIcon from "@/assets/icons/mail";
import NodeJSIcon from "@/assets/icons/nodejs";
import ReactIcon from "@/assets/icons/react";
import WhatsappIcon from "@/assets/icons/whatsapp";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "rgba(255,255,255,0)", "rgb(230, 255, 0)"]
  );
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center bg-neutral-900 text-white overflow-x-hidden">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <motion.header
        className="w-full h-16 flex items-center justify-center"
        initial={{ y: "-100%" }}
        transition={{ duration: 0.4 }}
        whileInView={{
          y: 0,
        }}
      >
        <div className="container m-auto flex items-center justify-evenly">
          <motion.a
            className="border-2 border-red-500 w-96 py-2 px-8 rounded bg-red-200 bg-opacity-30 text-red-400 font-semibold cursor-pointer hover:border-green-500 hover:bg-green-200 hover:text-green-500"
            onHoverStart={() => setIsOpen(!isOpen)}
            onHoverEnd={() => setIsOpen(!isOpen)}
            href="https://api.whatsapp.com/send?phone=5541999013657&text=I%20really%20wanna%20hire%20yoru%20services,%20Mr%20Andre"
            target="blank"
          >
            {isOpen
              ? `🤜🤛 Contact now!`
              : "🤝 Andre is now available for hire"}
          </motion.a>
        </div>
      </motion.header>

      <section
        id="hero-wrapper"
        className="w-full h-[calc(100vh-64px)] relative"
      >
        <div
          id="hero-container"
          className="grid grid-cols-2 container m-auto w-full h-full"
        >
          <motion.div
            id="left-side"
            className="px-4 flex flex-col items-start my-[calc(50%-128px)] gap-4"
            initial={{ x: "-150%" }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              duration: 0.5,
              stiffness: 50,
              bounce: 5,
              damping: 10,
            }}
          >
            <h2 className="text-2xl flex font-bold text-start">
              Hi!{" "}
              <motion.div
                whileHover={{
                  scale: [1, 1.5, 1.5, 1],
                  rotate: [0, 75, 75, 0, 75, 75, 0],
                  transition: {
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: 0.4,
                  },
                }}
              >
                👋
              </motion.div>{" "}
              My name is{" "}
            </h2>

            <h1 className="text-9xl font-black text-start flex">
              <motion.span
                whileHover={{ scale: [1, 1.3, 1.3, 1, 1.1, 1.1, 1] }}
                transition={{
                  duration: 0.5,
                }}
                className="text-red-600 transition-colors"
              >
                A
              </motion.span>
              <motion.span
                whileHover={{ scale: [1, 1.3, 1.3, 1, 1.1, 1.1, 1] }}
                transition={{
                  duration: 0.5,
                }}
                className="hover:text-red-500 transition-colors"
              >
                n
              </motion.span>
              <motion.span
                whileHover={{ scale: [1, 1.3, 1.3, 1, 1.1, 1.1, 1] }}
                transition={{
                  duration: 0.5,
                }}
                className="hover:text-red-500 transition-colors"
              >
                d
              </motion.span>
              <motion.span
                whileHover={{ scale: [1, 1.3, 1.3, 1, 1.1, 1.1, 1] }}
                transition={{
                  duration: 0.5,
                }}
                className="hover:text-red-500 transition-colors"
              >
                r
              </motion.span>
              <motion.span
                whileHover={{ scale: [1, 1.3, 1.3, 1, 1.1, 1.1, 1] }}
                transition={{
                  duration: 0.5,
                }}
                className="hover:text-red-500 transition-colors"
              >
                e&nbsp;
              </motion.span>
              <motion.span
                whileHover={{ scale: [1, 1.3, 1.3, 1, 1.1, 1.1, 1] }}
                transition={{
                  duration: 0.5,
                }}
                className="text-red-600 transition-colors"
              >
                M
              </motion.span>
              <motion.span
                whileHover={{ scale: [1, 1.3, 1.3, 1, 1.1, 1.1, 1] }}
                transition={{
                  duration: 0.5,
                }}
                className="hover:text-red-500 transition-colors"
              >
                e
              </motion.span>
              <motion.span
                whileHover={{ scale: [1, 1.3, 1.3, 1, 1.1, 1.1, 1] }}
                transition={{
                  duration: 0.5,
                }}
                className="hover:text-red-500 transition-colors"
              >
                l
              </motion.span>
              <motion.span
                whileHover={{ scale: [1, 1.3, 1.3, 1, 1.1, 1.1, 1] }}
                transition={{
                  duration: 0.5,
                }}
                className="hover:text-red-500 transition-colors"
              >
                o
              </motion.span>
            </h1>

            <h3 className="text-4xl text-start font-bold">
              and I build stuff for the web
            </h3>
          </motion.div>
          <div id="right-side"></div>
        </div>

        <div
          id="back-strip"
          className="absolute bottom-40 h-20 bg-stone-600 opacity-20 w-[120vw] -translate-x-6 rotate-6"
        ></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          id="strip"
          className="absolute bottom-32 h-28 bg-red-600 w-[120vw] -translate-x-6 -rotate-3"
        >
          <motion.ul
            className="flex items-center justify-start h-full font-black gap-16 text-6xl list-disc text-red-200"
            initial={{ x: 0 }}
            animate={{ translateX: "-150%" }}
            transition={{ duration: 120, repeat: Infinity }}
            whileHover={{ translateX: "-150%", transition: { duration: 240 } }}
          >
            <li className="min-w-fit list-item uppercase hover:text-yellow-300 transition-colors">
              Computer Science Aficcionado
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-300 transition-colors">
              Businessman
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-300 transition-colors">
              3D Printer
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-300 transition-colors">
              UI/UX enthusiast
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-300 transition-colors">
              Computer Science Aficcionado
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-300 transition-colors">
              Businessman
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-300 transition-colors">
              3D Printer
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-300 transition-colors">
              UI/UX enthusiast
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-300 transition-colors">
              Computer Science Aficcionado
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-300 transition-colors">
              Businessman
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-300 transition-colors">
              3D Printer
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-300 transition-colors">
              UI/UX enthusiast
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-300 transition-colors">
              Computer Science Aficcionado
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-300 transition-colors">
              Businessman
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-300 transition-colors">
              3D Printer
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-300 transition-colors">
              UI/UX enthusiast
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-300 transition-colors">
              Computer Science Aficcionado
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-300 transition-colors">
              Businessman
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-500">
              3D Printer
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-500">
              UI/UX enthusiast
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-500">
              Computer Science Aficcionado
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-500">
              Businessman
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-500">
              3D Printer
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-500">
              UI/UX enthusiast
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-500">
              Computer Science Aficcionado
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-500">
              Businessman
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-500">
              3D Printer
            </li>
            <li className="min-w-fit list-item uppercase hover:text-yellow-500">
              UI/UX enthusiast
            </li>
          </motion.ul>
        </motion.div>
      </section>

      <motion.section
        id="stack"
        className="flex flex-col items-center justify-center gap-24 h-[calc(100vh/2)] w-full"
        style={{ background }}
      >
        <h2 className="text-4xl">
          I&apos;m a Fullstack developer and my main stack is:
        </h2>

        <motion.div
          id="stack-techs-container"
          className="flex flex-col md:flex-row gap-8"
          whileInView={{ opacity: [0, 1] }}
          // viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 2 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x }}
        >
          <NodeJSIcon className="relative h-32 w-32 fill-white bg-red-700 p-2 rounded" />

          <ReactIcon className="relative h-32 w-32 fill-white bg-red-700 p-2 rounded" />

          <JavascriptIcon className="relative h-32 w-32 fill-white bg-red-700 p-2 rounded" />
        </motion.div>
      </motion.section>

      <section className="w-full h-[calc(100vh/2)] flex flex-col gap-24 items-center justify-center">
        <h3 className="text-4xl">You can check most of my skills at:</h3>
        <Link
          href="https://github.com/afmelo92"
          target="_blank"
          className="relative h-32 w-32"
        >
          <GithubIcon className="relative h-32 w-32 fill-white bg-red-700 p-2 rounded hover:bg-white hover:fill-red-700 transition-colors" />
        </Link>
      </section>

      <section className="w-full h-[calc(100vh/2)] flex flex-col gap-12 items-center justify-center">
        <h3 className="text-4xl">
          I also have a company called{" "}
          <Link href="https://predatorlabs.com.br" target="_blank">
            <strong className="font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
              Predator Labs
            </strong>{" "}
          </Link>
          which provides:
        </h3>
        <ul className="max-w-fit h-auto flex-wrap flex gap-2 text-2xl items-start justify-center">
          <motion.li
            whileHover={{ scale: 1.2, outline: "4px solid white" }}
            className="bg-gradient-to-r from-red-600 to-red-800 p-2 rounded"
          >
            Software development
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, outline: "4px solid white" }}
            className="bg-gradient-to-r from-red-600 to-red-800 p-2 rounded"
          >
            Landing pages
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, outline: "4px solid white" }}
            className="bg-gradient-to-r from-red-600 to-red-800 p-2 rounded"
          >
            Websites
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, outline: "4px solid white" }}
            className="bg-gradient-to-r from-red-600 to-red-800 p-2 rounded"
          >
            Web Traffic / SEO
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, outline: "4px solid white" }}
            className="bg-gradient-to-r from-red-600 to-red-800 p-2 rounded"
          >
            Digital positioning
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, outline: "4px solid white" }}
            className="bg-gradient-to-r from-red-600 to-red-800 p-2 rounded"
          >
            and more...
          </motion.li>
        </ul>
      </section>

      <section className="w-full h-[calc(100vh/2)] flex flex-col gap-12 items-center justify-center">
        <h3 className="text-4xl">If you wanna hire me, call me at:</h3>
        <div id="links-container" className="flex gap-8">
          <Link href="mailto:andre@afmelo.com" id="mail-icon">
            <MailIcon className="stroke-2 stroke-white fill-red-700 p-2 w-32 h-32 bg-red-700 rounded hover:bg-white hover:fill-white hover:stroke-red-700 transition-colors" />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=5541999013657&text=Hey%20Andre!%20I%20wanna%20hire%20you."
            target="_blank"
            id="mail-icon"
          >
            <WhatsappIcon className="fill-white p-2 w-32 h-32 bg-red-700 rounded hover:bg-white hover:fill-red-700 transition-colors" />
          </Link>
        </div>
      </section>

      <section className="w-full h-[calc(100vh/2)] flex flex-col gap-12 items-center justify-center">
        <h3 className="text-4xl">
          Below you probably will find some random test stuff. Enjoy!
        </h3>
      </section>
    </main>
  );
}
