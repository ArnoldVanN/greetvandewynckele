import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

export default function CustomSection({
  children,
  id,
  className,
  name,
}: {
  children: React.ReactNode;
  name: string;
  id: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "min-h-[400px]  mx-[5%] sm:mx-[10%] md:mx-[20%] xl:mx-[30%]  py-16 ",
        className,
      )}
    >
      <div className="flex flex-col items-center justify-center">
        <Separator className="mx-2 my-1 py-8 bg-black" orientation="vertical" />
        <h2 className="font-playfair italic text-xl font-extralight">{name}</h2>
      </div>
      {children}
    </section>
  );
}
