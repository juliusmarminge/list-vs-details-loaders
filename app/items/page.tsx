import Link from "next/link";

export default async function ListPage() {
  // load some data
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="flex flex-col gap-2 my-8">
      <h1>List page</h1>
      {Array.from({ length: 12 }).map((_, i) => (
        <Link
          href={`/items/${i}`}
          className="border-2 border-gray-300 rounded-lg px-2 py-1"
        >
          {i}
        </Link>
      ))}
    </div>
  );
}
