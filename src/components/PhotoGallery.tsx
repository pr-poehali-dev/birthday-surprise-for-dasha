import { Card } from "@/components/ui/card";

const PhotoGallery = () => {
  const photos = [
    {
      url: "https://cdn.poehali.dev/files/ed8b5e77-a34c-48cb-9707-5739208f93d7.jpg",
      alt: "Памятный момент 1",
    },
    {
      url: "https://cdn.poehali.dev/files/341e7368-5440-4075-bcb0-23af343e1d64.jpg",
      alt: "Памятный момент 2",
    },
    {
      url: "https://cdn.poehali.dev/files/71a565bc-0dcb-4def-8002-a7de6648d11e.jpg",
      alt: "Памятный момент 3",
    },
    {
      url: "https://cdn.poehali.dev/files/57049f7a-633d-4a3e-9205-9960dafc6580.jpg",
      alt: "Памятный момент 4",
    },
    {
      url: "https://cdn.poehali.dev/files/d3132f69-ec9f-487e-a9c3-3de367679062.jpg",
      alt: "Памятный момент 5",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-montserrat">
          Твои Яркие Моменты 📸
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg font-open-sans">
          Каждое фото — это частичка счастья и воспоминаний! 💕
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photos.map((photo, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:scale-105 bg-gradient-to-br from-pink-200/80 to-purple-200/80 backdrop-blur-sm border-4 border-gradient-to-r from-pink-400 to-purple-500 rounded-3xl"
            >
              <div className="relative">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110 rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/30 via-purple-500/20 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-rainbow-500/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-gradient-to-r from-pink-500/90 to-purple-600/90 rounded-2xl p-4 backdrop-blur-sm">
                    <p className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-open-sans text-center">
                      {photo.alt} ✨💖
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
