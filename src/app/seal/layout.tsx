export default function Seal({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
      <section>
        {/* View More component */}
      </section>
    </div>
  );
}