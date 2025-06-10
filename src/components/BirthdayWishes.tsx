import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

const BirthdayWishes = () => {
  const [currentWish, setCurrentWish] = useState(0);

  const wishes = [
    {
      title: "Пожелание счастья 💖",
      text: "Пусть каждый день приносит тебе новые поводы для улыбки, а жизнь будет наполнена яркими красками и незабываемыми моментами!",
    },
    {
      title: "Пожелание успеха 🌟",
      text: "Желаю тебе покорять новые вершины, достигать всех целей и никогда не останавливаться на достигнутом! Ты можешь всё!",
    },
    {
      title: "Пожелание любви 💕",
      text: "Пусть твоё сердце всегда будет наполнено любовью, а рядом будут те, кто ценит и дорожит тобой!",
    },
  ];

  const jokes = [
    "Почему торт всегда веселый? Потому что у него много слоёв настроения! 🎂",
    "Что говорят свечки на торте? 'Мы горим от желания поздравить тебя!' 🕯️",
    "Почему подарки всегда в хорошем настроении? Потому что их скоро распакуют! 🎁",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWish((prev) => (prev + 1) % wishes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [wishes.length]);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-montserrat">
          Особые Пожелания 🌟
        </h2>

        {/* Rotating wishes */}
        <Card className="p-8 mb-12 bg-gradient-to-r from-purple-400/20 to-pink-400/20 border-2 border-purple-300 shadow-xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-purple-700 font-montserrat">
              {wishes[currentWish].title}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed font-open-sans">
              {wishes[currentWish].text}
            </p>
          </div>
        </Card>

        {/* Jokes section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-purple-600 font-montserrat">
            Немного Юмора 😄
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {jokes.map((joke, index) => (
              <Card
                key={index}
                className="p-6 bg-white/80 border-2 border-yellow-200 hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform transition-transform"
              >
                <p className="text-center text-gray-700 font-open-sans leading-relaxed">
                  {joke}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Final message */}
        <Card className="p-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4 font-montserrat">
            С Любовью и Наилучшими Пожеланиями! 💖
          </h3>
          <p className="text-xl font-open-sans">
            Пусть этот день станет началом самого счастливого года в твоей
            жизни! 🎉✨
          </p>
          <div className="text-4xl mt-4">🎂🎈🎁💕🌟</div>
        </Card>
      </div>
    </section>
  );
};

export default BirthdayWishes;
