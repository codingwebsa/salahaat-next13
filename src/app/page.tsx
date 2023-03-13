import { BookSection, Carousel } from "@/components";

export default function Home() {
  return (
    <>
      <div className="pb-32">
        <Carousel />
        <BookSection title="Recent Books" />
      </div>
    </>
  );
}
