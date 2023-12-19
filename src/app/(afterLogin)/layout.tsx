export default function AfterLoginLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			AFTER LOGIN LAYOUT
			<a href="https://nextjs.org/docs/app/building-your-application/routing/route-groups">Route Groups</a>
			{children}
		</div>
	);
}
