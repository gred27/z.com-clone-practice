export default function HomeLayout({ children }: { children: React.ReactNode }) {
	
	return (
		<div>
			Layout은 리렌더링 X (데이터를 유지)
			template는 페이지를 넘나들때마다 기록 // 매번 새롭게 mount 
			Layout 기준으로 routing? HOME LAYOUT
			{children}
		</div>
	);
}
