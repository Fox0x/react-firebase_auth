import React, { useEffect } from "react";
import css from "../style/FormStyle.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import ErrorMessages from "../UI/ErrorMessages/ErrorMessages";
import {signup} from "../../firebase"

export default function LoginForm() {
	const [errorMessages, setErrorMessages] = React.useState(null);
	const [isFlipping, setIsFlipping] = React.useState(false);
	const formClasses = classNames(css.form, {
		[css.flip_shade]: isFlipping,
	});
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			password: Yup.string()
				.min(8, "Password must be at least 8 characters")
				.required("Password is required"),
		}),
		onSubmit: (values) => {
			setIsFlipping(!isFlipping);
			setTimeout(() => navigate("/auth/register"), 500);
			signup(values.email, values.password)
		},
	});
	let arr = [];
	useEffect(() => {
		if (formik.errors.email && formik.touched.email)
			arr.push(formik.errors.email);
		if (formik.errors.password && formik.touched.password)
			arr.push(formik.errors.password);
		if (!formik.errors) {
			arr = [];
		}
		arr.length > 0 ? setErrorMessages(arr) : setErrorMessages(null);
	}, [formik.errors, formik.touched]);
	return (
		<form className={formClasses} onSubmit={formik.handleSubmit}>
			<ErrorMessages errors={errorMessages} />
			<h1 className={css.form__title}>Sign in</h1>
			<div className={css.input__container}>
				<input
					autoFocus
					className={css.input}
					placeholder="Email"
					type="email"
					name="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					style={
						formik.errors.email &&
						formik.touched.email && {
							borderLeft: "solid 10px #E03A45",
							borderBottomColor: "#E03A45",
						}
					}
				/>

				<input
					className={css.input}
					placeholder="Password"
					type="password"
					name="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					style={
						formik.errors.password &&
						formik.touched.password && {
							borderLeft: "solid 10px #E03A45",
							borderBottomColor: "#E03A45",
						}
					}
				/>
			</div>

			<button
				type="submit"
				className={css.form__button}
				disabled={!formik.isValid}>
				Login
			</button>
			<span className={css.form__subtitle}>
				Don't have an account?{" "}
				<NavLink to="/auth/register">Sign Up</NavLink>
			</span>
		</form>
	);
}
