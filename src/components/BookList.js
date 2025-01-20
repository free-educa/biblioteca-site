import Image from "next/image";

export default function BookList() {
  const mockList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className=" max-w-6xl mx-auto p-4 text-black grid grid-cols-4 gap-4">
      {mockList.map((x) => (
        <div
          className="w-60 h-56 bg-gray-50 overflow-hidden flex flex-col items-center"
          key={x}
        >
          <Image
            src="/book-default-cover.jpg"
            alt="book default image"
            width={125}
            height={120}
          />
          <h1>book</h1>
        </div>
      ))}
    </div>
  );
}
