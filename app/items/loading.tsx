export default function ListPage() {
  return (
    <div className="flex flex-col gap-2 my-8">
      {Array.from({ length: 4 }).map(() => (
        <div className="border-2 border-gray-300 rounded-lg animate-pulse">
          <div className="bg-gray-700">&nbsp;</div>
        </div>
      ))}
    </div>
  );
}
