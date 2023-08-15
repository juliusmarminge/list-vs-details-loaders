import Link from "next/link";

export default async function DetailsPage(props: { params: { id: string } }) {
  // load more data
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="my-8">
      <h1>Details Page</h1>
      <pre>{JSON.stringify(props, null, 4)}</pre>
      <Link href={`/items/${Number(props.params.id) + 1}`}>Next</Link>
    </div>
  );
}
