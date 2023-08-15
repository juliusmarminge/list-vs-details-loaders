export default function ListPage() {
  return (
    <div className="flex flex-col gap-2 my-8">
      <h1>List page</h1>
      {Array.from({ length: 12 }).map(() => (
        <div className="border-2 border-gray-300 rounded-lg animate-pulse overflow-hidden">
          <div className="bg-gray-700 px-2 py-1">&nbsp;</div>
        </div>
      ))}
    </div>
  );
}
