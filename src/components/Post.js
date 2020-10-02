import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
	return (
		<div className="post">
			{/* header -> avatar + username + (location) */}
			<div className="post__header">
				<Avatar
					className="post__avatar"
					alt={username}
					src="../images/avatar/somfuckinghin.jpg"
					style={{ height: "32px", width: "32px" }}
				/>
				<p>{username}</p>
			</div>

			{/* image */}
			<img className="post__image" src={imageUrl} alt="LANY"></img>

			{/* username + caption */}
			<p className="post__text">
				<b>{username}</b> {caption}
			</p>
		</div>
	);
}

export default Post;
