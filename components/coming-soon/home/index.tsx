import { Sparkles, Star } from "lucide-react";
import { useState, useEffect } from "react";

import { CountdownUnit } from "../countdown-unit";
import clsx from "clsx";

export function Home() {
  const [launchDate] = useState(new Date("2025-09-01T00:00:00"));
  const [isVisible, setIsVisible] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const distance = launchDate.getTime() - now.getTime();

      if (distance < 0) {
        clearInterval(timer);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-[#2f3091] via-[#1e1b4b] to-[#312e81] flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Primary gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-red-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 left-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Grid pattern overlay */}
      </div>

      {/* Main content */}
      <div
        className={clsx(
          "relative z-10 flex flex-col items-center justify-center text-center text-white transition-all duration-1000 transform my-6 sm:my-9 mx-4 sm:mx-8",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
      >
        {/* Logo/Badge */}
        <div className="mb-8 relative">
          <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
            <span className="text-sm font-medium text-white/90">
              Something Amazing
            </span>
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 leading-none mb-6 relative">
          Coming
          <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent ">
            Soon
          </span>
          {/* Decorative elements */}
          <Star
            className="absolute -top-4 -right-8 w-8 h-8 text-yellow-300 animate-spin"
            style={{ animationDuration: "3s" }}
          />
          <Star className="absolute -bottom-2 -left-6 w-6 h-6 text-pink-300 animate-bounce" />
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mb-12 leading-relaxed">
          Stay tuned for an experience that will redefine your expectations and
          elevate your journey with us.
          <span className="block mt-2 text-lg text-white/60">
            We're crafting something extraordinary just for you.
          </span>
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
          <CountdownUnit value={timeRemaining.days} label="Days" />
          <CountdownUnit value={timeRemaining.hours} label="Hours" />
          <CountdownUnit value={timeRemaining.minutes} label="Minutes" />
          <CountdownUnit value={timeRemaining.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
}
