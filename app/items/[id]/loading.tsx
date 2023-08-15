export default function DetailsPage(props: { params: { id: string } }) {
  return (
    <div className="my-8">
      <h1>Details Page</h1>
      <pre className="bg-gray-700 text-transparent rounded animate-pulse">
        {JSON.stringify({ params: { id: "1", searchParams: {} } }, null, 4)}
      </pre>
    </div>
  );
}
