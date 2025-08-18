export default function Brand({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <section>
        {children}
        {/* View More component */}
      </section>
    </div>
  );
}