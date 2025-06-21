import { Separator } from "./ui/separator";

export default function SectionHeading({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col items-center justify-center">
			<Separator className="mx-2 my-1 py-8 bg-black" orientation="vertical" />
			<h2 className="">{children}</h2>
		</div>
	);
}
