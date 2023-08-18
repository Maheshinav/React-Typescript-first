import { useState } from "react";

function ListGroup() {
	let cats = [
		"Bengal Cats",
		"Russian Blue",
		"Munchkin",
		"Persian",
		"Turkish Angora",
	];
    const [selectedIndex, setSelectedIndex] = useState (-1);
    const [name, setName]= useState("")
	return (
		<>
			<h1>MY CATS</h1>
			<ul className="list-group">
				{cats.map((cat, index) => (
					<li
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
						key={cat}
						onClick={() => {
							setSelectedIndex (index);
						}}
					>
						{cat}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
