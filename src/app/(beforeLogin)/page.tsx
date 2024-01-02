import Image from "next/image";
import Link from "next/link";
import zLogo from "/public/zlogo.png";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";

export default function Home() {
	return (
		<main className={flex({})}>
			<div className={css({ flex: 1 })}>
				<Image src={zLogo} alt="logo" />
			</div>
			<div className={css({ flex: 1, p: "20px" })}>
				<h1 className={css({ fontSize: "64px", lineHeight: "48px", fontWeight: 700, my: "48px", letterSpacing: "-1.2px" })}>지금 일어나고 있는 일</h1>
				<h2 className={css({ fontSize: "34px", lineHeight: "36px", fontWeight: 700, mb: "32px", letterSpacing: "-1.2px" })}>지금 가입하세요.</h2>
				<Link href="/i/flow/signup" className={flex({ flex: "0 0 auto", align: "center", justify: "center", maxW: "380px", minW: "36px", width: "300px", height: "40px", minH: "36px", mb: "8px", px: "16px", borderRadius: "9999px", bgColor: "rgba(29,155,240)" })}>
					<span className={css({ color: "white", lineHeight: "20px", fontWeight: 700, fontSize: "15px" })}>계정 만들기</span>
				</Link>
				<div className={css({ mt: "40px" })}>
					<h3 className={css({ fontSize: "17px", fontWeight: 700, mb: "20px" })}>이미 트위터에 가입하셨나요?</h3>
					<Link href="/login" className={flex({ flex: "0 0 auto", w: "300px", maxW: "380px", minW: "36px", h: "40px", minH: "36px", mb: "8px", px: "16px", borderRadius: "9999px", border: "1px solid rgb(207,217,222)", backgroundColor: { base: "rgba(0,0,0,0)", _hover: "rgba(29, 155, 240, 0.1)" }, transitionProperty: "background-color, box-shadow", transitionDuration: "0.2s" })}>
						<span className={css({ display: "flex", lineHeight: "20px", color: "rgb(29,155,240)", justifyContent: "center", alignItems: "center", fontWeight: 700, flexGrow: 1, textAlign: "center" })}>로그인</span>
					</Link>
				</div>
			</div>
		</main>
	);
}
