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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/70 backdrop-blur-sm border-2 border-purple-200"
            >
              <div className="relative">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-open-sans">
                    {photo.alt} ✨
                  </p>
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
