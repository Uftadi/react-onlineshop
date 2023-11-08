import React from "react";

function Form() {
	return (
		<>
			<div className="form-container">
				<form action="">
					<h1>Einloggen</h1>
					<label htmlFor="">
						<input
							type="text"
							name="email"
							id="email"
							placeholder="E-mail Adresse oder Telefonummer"
						/>
					</label>
					<label htmlFor="">
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Passwort"
						/>
					</label>
					<button>Einloggen</button>
				</form>
				<p>
					<input type="checkbox" />
					Benutzername merken
					<span>Sie benötigen Hilfe?</span>
				</p>
				<h4>
					Neu bei DS-Shop? <a href="#">Jetzt registrieren</a>
				</h4>
				<p>
					Diese seite ist durch Google reCaptcha abgesichert,um sicherzustellen,
					dass Sie kein Bot sind. <a href="#">Weitere infos.</a>
				</p>
			</div>
		</>
	);
}

export default Form;
