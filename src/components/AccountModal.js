import { Button } from "@material-ui/core";
import React from "react";
import "./AccountModal.css";

export const AccountModal = () => {
	return (
		<div className="modal__wrapper">
			<div className="modal__header">
				<img
					src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
					alt="Instagram"
				></img>
			</div>
			<div className="modal__body">
				<form>
					<Input
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<Input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button onClick={signUp}>Sign in</Button>
				</form>
			</div>
		</div>
	);
};
