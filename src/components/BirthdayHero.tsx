import { useEffect, useState } from "react";

const BirthdayHero = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-4xl animate-bounce ${showConfetti ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            {
              ["🎉", "🎂", "🎈", "✨", "🎁", "💖"][
                Math.floor(Math.random() * 6)
              ]
            }
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-montserrat">
            С Днём Рождения,
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent mb-8 font-montserrat">
            Даша! 🎂
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-open-sans">
            Пусть этот день будет наполнен радостью, смехом и самыми яркими
            моментами! ✨
          </p>

          {/* Birthday cake animation */}
          <div className="text-8xl mb-8 animate-pulse">🎂</div>

          <div className="flex justify-center gap-4 text-6xl animate-bounce">
            🎈🎉🎁
          </div>
        </div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
    </section>
  );
};

export default BirthdayHero;
