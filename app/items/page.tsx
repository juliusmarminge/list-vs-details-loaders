import Link from "next/link";

export default async function ListPage() {
  // load some data
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="flex flex-col gap-2 my-8">
      {Array.from({ length: 4 }).map((_, i) => (
        <Link
          href={`/items/${i}`}
          className="border-2 border-gray-300 rounded-lg"
        >
          {i}
        </Link>
      ))}
    </div>
  );
}
