import BookData from "@/data/book.json";
import Image from "next/image";

interface BookSectionProps {
  title?: string;
}

const BookSection = ({ title }: BookSectionProps) => {
  return (
    <>
      <section className="mt-4">
        <div className="px-4">
          {title && <h2 className="text-2xl font-semibold mb-3">{title}</h2>}
          <div className="grid grid-cols-2 grid-flow-row gap-2">
            {BookData.map((book) => (
              <>
                <div>
                  {/* image */}
                  <div>
                    <Image
                      className="rounded-md object-cover aspect-[9/15]"
                      src={book.imgurl || ""}
                      alt={book.name || ""}
                      width={250}
                      height={395}
                      quality={60}
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="text-lg line-clamp-2">{book.name}</h3>
                    <p className="text-sm mt-px text-my-gray line-clamp-1">
                      {book.author}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BookSection;
