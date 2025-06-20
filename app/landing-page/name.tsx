"use client"

import { useEffect, useRef } from "react"

export function Name() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section className="relative pt-10 md:pt-20 w-full">
      {/* <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://hhenvp4y5h3wlryn.public.blob.vercel-storage.com/pizza-website/6603318-uhd_3840_2160_25fps-TO5CoCF3GWWqpRyKXJIsSGDyzVzsAx.mp4"
        autoPlay
        loop
        muted
        playsInline
      /> */}
      <div className="w-max mx-auto px-10 py-5 rounded-xl flex flex-col items-center gap-y-2 z-10 relative backdrop-blur-md bg-background/40">
        <h1 className="font-playfair text-6xl md:8xl lg:9xl font-bold">Piegaro's</h1>
        <p className="font-medium">made with effort</p>
      </div>
    </section>
  )
}