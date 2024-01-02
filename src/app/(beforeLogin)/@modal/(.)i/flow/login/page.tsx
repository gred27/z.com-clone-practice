import Image from "next/image";
import zLogo from "/public/zlogo.png";
import { css } from "../../../../../../../styled-system/css";
import { flex } from "../../../../../../../styled-system/patterns";

export default function ModalPage() {
	return (
		<div className={flex({ position: "fixed", right: 0, left: 0, top: 0, width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center" })}>
			<div className={flex({ position: "fixed", top: 0, bottom: 0, left: 0, right: 0, pointerEvents: "none", backgroundColor: "rgba(0,0,0,0.4)" })}>Parallel Modal</div>
			<div className={css({ pos: "relative", minW: "600px", maxW: "80vw", maxH: "90vh", minH: "400px", height: "650px", borderRadius: "16px", backgroundColor: "white" })}>
				<div className={flex({ w: "100%", h: "53px", px: "16px", mx: "auto", align: "center", justifyContent: "center" })}>
					<div className={flex({ minW: "56px", flexShrink: 1, flexBasis: "50%", alignItems: "flex-start" })}>
						<div role="button" aria-label="닫기" className={flex({ alignItems: "center", justifyContent: "center", minW: "36px", minH: "36px", borderRadius: "9999px", border: "1px solid", borderColor: "rgba(0,0,0,0)", transitionDuration: "0.2s", transitionProperty: "background-color", backgroundColor: { base: "rgba(0,0,0,0)", _hover: "rgba(15,20,25,0.1)" } })}>
							<svg viewBox="0 0 24 24" aria-hidden="true" className={css({ color: "rgb(15, 20, 25)", w: "20px", h: "20px" })}>
								<g>
									<path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
								</g>
							</svg>
						</div>
					</div>
					<div className={flex({ flex: "1 1 auto", h: "100%" })}>
						<Image src={zLogo} alt="Logo" className={css({ minW: "32px", w: "auto" })} />
					</div>
					<div className={flex({ minW: "56px", flexShrink: 1, flexBasis: "50%" })}></div>
				</div>
				<div className={flex({ flexDir: "column", margin: "auto", width: "464px", pb: "48px", px: "32px", alignItems: "center" })}>
					<div>
						<span>X 가입하기</span>
					</div>
					<div>이메일</div>
					<div>비밀번호</div>
					<div>로그인</div>
				</div>
			</div>
		</div>
	);
}

// intercepter router, parallel router 사용
// intercepter router 는 CSR 이동시에만 적용
// ex home -> (.i)/flow/login CSR 이동은 인터셉트 되지만 새로고침되면 i/flow/login page.tsx 렌더링
