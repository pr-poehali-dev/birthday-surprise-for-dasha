import BirthdayHero from "@/components/BirthdayHero";
import PhotoGallery from "@/components/PhotoGallery";
import BirthdayWishes from "@/components/BirthdayWishes";

const Index = () => {
  return (
    <div className="min-h-screen">
      <BirthdayHero />
      <PhotoGallery />
      <BirthdayWishes />
    </div>
  );
};

export default Index;
