import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import Post from "./components/Post";

function App() {
	const [posts, setPosts] = useState([
		{
			username: "somfuckinghin",
			caption: "some rainbow?",
			imageUrl:
				"https://isbn.radiohead.com/35/responsive-images/c0cbd4e552b280768d75f025331b0fa0___a_979_979.jpg",
		},
		{
			username: "somfuckinghin",
			caption:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
			imageUrl: "https://f4.bcbits.com/img/a3584407224_10.jpg",
		},
		{
			username: "somfuckinghin",
			caption: "hey yo!",
			imageUrl:
				"https://www.thisislany.com/wp-content/themes/lany/assets/gfx/sleeve.jpg",
		},
	]);

	return (
		<div className="App">
			<Header />

			{/* mapping post from state */}
			{posts.map((post) => (
				<Post
					username={post.username}
					caption={post.caption}
					imageUrl={post.imageUrl}
				/>
			))}
		</div>
	);
}

export default App;
