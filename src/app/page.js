import Header from "@/components/Header";

export default function Home() {
	return (
		<>
			<Header />
			<main className="p-5">
				<h2 className="text-2xl">Home</h2>
				<p>This page is protected</p>
			</main>
		</>
	);
}
