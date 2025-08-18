import { ViewMore } from "@/components/ViewMore";

export default function Brand({
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