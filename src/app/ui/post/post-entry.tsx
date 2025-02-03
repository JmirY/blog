export default function PostEntry({title, date}: {
  [key: string]: string
}) {
  return (
    <div>
      <div className="text-xl font-semibold">
        {title}
      </div>
      <div className="text-sm">
        {date}
      </div>
    </div>
  );
}