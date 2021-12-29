import React from "react";
import css from "./ErrorMessages.module.css";

export default function ErrorMessages({ errors }) {
	if (!errors) return null;

	return (
		<div className={css.error__wrapper}>
			{Object.values(errors).map((error) => (
				<div className={css.error__message}>
					<img
						src="/img/error.svg"
						alt="error"
						className={css.error__img}
					/>
					{error}
				</div>
			))}
		</div>
	);
}
