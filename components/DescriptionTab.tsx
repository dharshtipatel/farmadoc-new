export default function DescriptionTab({ description }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-5 relative space-y-2">
      <h2 className="text-2xl font-semibold mb-2">
        Description
      </h2>
      {description ? (
        <div dangerouslySetInnerHTML={{ __html: description }} />
      ) : (
        <p>No description available.</p>
      )}
    </div>
  );
}