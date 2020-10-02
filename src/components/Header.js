import React from "react";
import "./Header.css";
import { AccountModal } from "./AccountModal";

export const Header = () => {
	return (
		<div className="app__header">
			<img
				className="app__headerImage"
				src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
				alt="Instagram"
			></img>
			<AccountModal />
		</div>
	);
};
