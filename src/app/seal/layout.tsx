import { ViewMore } from "@/components/ViewMore";

export default function Seal({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
      <section>
        <ViewMore />
      </section>
    </div>
  );
}