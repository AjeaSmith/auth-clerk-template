import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Header() {
	return (
		<header className="p-5 bg-slate-800 h-16 flex justify-between">
			<h2>Logo</h2>
			<nav>
				<ul className="flex space-x-4">
					<li>
						<SignedIn>
							<UserButton />
						</SignedIn>
					</li>
				</ul>
			</nav>
		</header>
	);
}
