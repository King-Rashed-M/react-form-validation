import React, {useState} from "react";

export default function App() {
	const initialFormData = {
		name: "",
		mob: "",
		date: "",
		gmail: "",
	};

	const initilFormErrors = {
		name: false,
		mob: false,
		date: false,
		gmail: false,
	};

	const [form, setForm] = useState(initialFormData);
	const [formErros, setFormErrors] = useState(initilFormErrors);

	const handleChange = (e) => {
		const {name, value} = e.target;
		setForm((preForm) => ({
			...preForm,
			[name]: value,
		}));

		setFormErrors((preErros) => ({
			...preErros,
			[name]: false,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let errors = {...formErros};
		if (!form.name) {
			errors.name = true;
		}
		if (!form.mob) {
			errors.mob = true;
		}
		if (!form.date) {
			errors.date = true;
		}
		if (!form.gmail) {
			errors.gmail = true;
		}

		setFormErrors(errors);

		if (!Object.values(errors).includes(true)) {
			console.log("formData", form);
			setForm(initialFormData);
			setFormErrors(initilFormErrors);
		}
	};

	return (
		<div style={styles.container}>
			<form onSubmit={handleSubmit}>
				<div style={styles.box}>
					<h2 style={styles.title}>Register user</h2>
					<div style={styles.inputWrapper}>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							autoComplete="off"
							placeholder="Enter user name"
							style={styles.input}
						/>
						{formErros.name && <p style={styles.error}>Enter user name</p>}
					</div>
					<div style={styles.inputWrapper}>
						<input
							type="tel"
							name="mob"
							value={form.mob}
							onChange={handleChange}
							autoComplete="off"
							placeholder="Enter phone number"
							style={styles.input}
						/>
						{formErros.mob && <p style={styles.error}>Enter phone number</p>}
					</div>
					<div style={styles.inputWrapper}>
						<input
							type="date"
							name="date"
							value={form.date}
							onChange={handleChange}
							autoComplete="off"
							placeholder="Enter Joining date"
							style={styles.input}
						/>
						{formErros.date && <p style={styles.error}>Enter Joining date</p>}
					</div>
					<div style={styles.inputWrapper}>
						<input
							type="email"
							name="gmail"
							value={form.gmail}
							onChange={handleChange}
							autoComplete="off"
							placeholder="Enter email address"
							style={styles.input}
						/>
						{formErros.gmail && <p style={styles.error}>Enter email address</p>}
					</div>
					<br />
					<button type="submit" style={styles.submit}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

const styles = {
	container: {
		padding: "20px",
		justifyContent: "center",
		alignItems: "center",
		display: "flex",
		minHeight: "100vh",
		margin: "0 auto",
		backgroundColor: "#111",
	},
	box: {
		display: "flex",
		flexDirection: "column",
		gap: "30px",
		width: "300px",
		maxWidth: "350px",
		padding: "25px",
		borderRadius: "20px",
		backgroundColor: "#333",
	},
	title: {
		textAlign: "center",
		fontSize: "20px",
		color: "#099268",
	},
	inputWrapper: {
		position: "relative",
		display: "flex",
	},
	input: {
		backgroundColor: "#222",
		border: "none",
		outline: "none",
		padding: "10px",
		borderRadius: "10px",
		color: "#fff",
		fontSize: "12px",
		width: "100%",
		height: "30px",
		transition: " 0.3s all ease-in-out",
	},
	submit: {
		padding: "10px",
		fontSize: "16px",
		borderRadius: "10px",
		backgroundColor: "#099268",
		position: "relative",
		color: "#fff",
		height: "40px",
		border: "none",
		cursor: "pointer",
		transition: "background-color 0.3s ease",
	},
	error: {
		color: "#d6336c",
		fontSize: "12px",
		position: "absolute",
		top: "42px",
	},
};
