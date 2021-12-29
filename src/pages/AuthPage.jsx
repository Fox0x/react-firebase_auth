import React, { useMemo } from "react";
import css from "./AuthPage.module.css";
import SvgBackground from "../components/UI/SvgBackground/SvgBackground";
import { Link } from "react-router-dom";

export default function AuthPage({ wrappedComponent }) {
	const color = useMemo(() => {
		switch (wrappedComponent.type.name) {
			case "WelcomeForm":
				return "#DB2379";
			case "LoginForm":
				return "#DC2430";
			case "RegisterForm":
				return "#F4B400";
			default:
				return "#DB2379";
		}
	}, [wrappedComponent.type.name]);

	return (
		<div className={css.auth__wrapper}>
			<div className={css.auth__content}>
				<div className={css.auth__leftSide}>
					<span className={css.auth__title}>
						Очень воодушевляющий слоган...
					</span>
					<img
						src="/img/logo.svg"
						alt="logo"
						className={css.auth__logo}
					/>
				</div>

				{wrappedComponent}
			</div>
			<SvgBackground color={color} />
			<div className={css.auth__skip}>
				<span>
					This is just a test sample, so you can{" "}
					<Link style={{color: "#dbdfea"}} to="/dash">skip the authentication step</Link>
					{" "}and go to the main menu.
				</span>
			</div>
		</div>
	);
}
