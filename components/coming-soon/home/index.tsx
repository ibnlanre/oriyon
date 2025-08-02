import { Sparkles, Star } from "lucide-react";
import { useState, useEffect } from "react";

import { CountdownUnit } from "../countdown-unit";
import clsx from "clsx";

export function Home() {
  const [launchDate] = useState(new Date("2025-08-09T00:00:00"));
  const [isVisible, setIsVisible] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
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
    <div className="relative min-h-screen w-full bg-[#060606] flex flex-col items-center justify-center overflow-hidden p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Primary gradient orbs using the new color palette */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#CBB26A]/10 rounded-full mix-blend-lighten filter blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-[#00CFC8]/10 rounded-full mix-blend-lighten filter blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 left-40 w-80 h-80 bg-[#CBB26A]/5 rounded-full mix-blend-lighten filter blur-xl animate-pulse delay-500"></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#FFFEF9]/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content with fade-in animation */}
      <div
        className={clsx(
          "relative z-10 flex flex-col items-center justify-center text-center text-[#FFFEF9] transition-all duration-1000 transform my-6 sm:my-9 mx-4 sm:mx-8",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
      >
        {/* Logo/Badge */}
        <div className="mb-8 relative">
          <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
            <Sparkles className="w-5 h-5 text-[#CBB26A] animate-pulse" />
            <span className="text-sm font-medium text-[#FFFEF9]/90">
              Something Amazing
            </span>
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00CFC8] rounded-full animate-ping"></div>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-[#FFFEF9] via-[#FFFEF9] to-[#FFFEF9]/40 leading-none mb-6 relative">
          Coming
          <span className="block bg-gradient-to-r from-[#CBB26A] via-[#00CFC8] to-[#CBB26A] bg-clip-text text-transparent">
            Soon
          </span>
          {/* Decorative elements */}
          <Star
            className="absolute -top-4 -right-8 w-8 h-8 text-[#CBB26A] animate-spin"
            style={{ animationDuration: "4s" }}
          />
          <Star className="absolute -bottom-2 -left-6 w-6 h-6 text-[#00CFC8] animate-bounce" />
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-[#FFFEF9]/80 max-w-3xl mb-12 leading-relaxed">
          Stay tuned for an experience that will redefine your expectations and
          elevate your journey with us.
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
