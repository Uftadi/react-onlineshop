import React from "react";
import "../css/form.scss";
import { useState } from "react";

function Form() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const newErrors = {};
		if (!formData.email) {
			newErrors.email = "E-mail ist erforderlich";
		}
		if (!formData.password) {
			newErrors.password = "Passwort ist erforderlich";
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}
		alert("Formular erfolgreich abgesendet!");
	};

	return (
		<>
			<div className="form-container">
				<h2>Einloggen</h2>
				<form onSubmit={handleSubmit}>
					<label htmlFor="">
						<input
							type="text"
							name="email"
							placeholder="E-mail Adresse oder Telefonummer"
							value={formData.email}
							onChange={handleInputChange}
						/>
					</label>
					<span className="error">{errors.email}</span>
					<label htmlFor="">
						<input
							type="password"
							name="password"
							placeholder="Passwort"
							value={formData.password}
							onChange={handleInputChange}
						/>
						<span className="error">{errors.password}</span>
					</label>
					<button type="submit">Einloggen</button>
				</form>
				<p>
					<input type="checkbox" />
					Benutzername merken
					<span>Sie benötigen Hilfe?</span>
				</p>
				<p>
					Neu bei DS-Shop? <br /> <a href="#">Jetzt registrieren</a>
				</p>
				<p>
					Diese seite ist durch Google reCaptcha abgesichert,um sicherzustellen,
					dass Sie kein Bot sind. <a href="#">Weitere infos.</a>
				</p>
			</div>
		</>
	);
}

export default Form;
