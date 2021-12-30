import React from "react";
import css from "./ErrorMessages.module.css";

export default function ErrorMessages({ errors }) {
	if (!errors) return null;

	const errorHandler = (error) => {
		if (error === "auth/wrong-password") return "Wrong email or password";
		if (error === "auth/user-not-found")
			return "Email not found, please sign up";
		if (error === "auth/email-already-in-use")
			return "Email already in use";
		if (error === "auth/too-many-requests")
			return "Too many requests. Try again later";
		if (error === "auth/operation-not-allowed")
			return "Error during sign up. Try again later";
		return error;
	};

	return (
		<div className={css.error__wrapper}>
			{Object.values(errors).map((error) => (
				<div className={css.error__message} key={error}>
					<img
						src="/img/error.svg"
						alt="error"
						className={css.error__img}
					/>
					{errorHandler(error)}
				</div>
			))}
		</div>
	);
}
