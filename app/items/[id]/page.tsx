import Link from "next/link";

export default async function DetailsPage(props: { params: { id: string } }) {
  // load more data
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="my-8">
      <h1>Details Page</h1>
      <pre className="bg-gray-900 p-1 rounded">
        {JSON.stringify(props, null, 4)}
      </pre>

      <div className="flex">
        <Link href={`/items`}>Back to list</Link>
        <Link
          className="ml-auto"
          href={`/items/${Number(props.params.id) - 1}`}
        >
          Prev
        </Link>
        <Link className="ml-4" href={`/items/${Number(props.params.id) + 1}`}>
          Next
        </Link>
      </div>
    </div>
  );
}
