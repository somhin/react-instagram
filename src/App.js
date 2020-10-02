import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import Post from "./components/Post";
import { db } from "./firebase";

function App() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// .collection => access "posts" collection from firebase database
		db.collection("posts").onSnapshot((snapshot) => {
			// .onSnapshot => invoke everytime collection gets updated
			setPosts(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					post: doc.data(),
				}))
			);
		});
	}, []);

	return (
		<div className="App">
			<Header />

			{/* mapping post from state */}
			{posts.map(({ id, post }) => (
				<Post
					key={id}
					username={post.username}
					caption={post.caption}
					imageUrl={post.imageUrl}
				/>
			))}
		</div>
	);
}

export default App;
