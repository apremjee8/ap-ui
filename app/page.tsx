"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  return (
    // adding quick box animation here - you have to have a shouldAnimate flag in use state above
    // then you have to have the button toggle that state between true and false
    // finally you can pass the animate prop to the motion.div element and set your parameters for how you want it to animate
    <div className='flex flex-col items-center space-y-28 mt-5'>
      <button
        className='bg-zinc-950 text-white rounded-lg p-3'
        onClick={() => setShouldAnimate((s) => !s)}
      >
        Animate
      </button>
      <motion.div
        className='h-48 w-48 bg-blue-700 rounded-lg'
        animate={{ scale: shouldAnimate ? 1.5 : 1, y: shouldAnimate ? -40 : 0 }}
      />
    </div>
  );
}
