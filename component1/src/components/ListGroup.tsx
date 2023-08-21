import { useState } from "react";
interface Props {
	cats: string[];
	heading: string;
}

function ListGroup({ cats, heading }: Props) {
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const [name, setName] = useState("");
	return (
		<>
			<h1>{heading}</h1>
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
							setSelectedIndex(index);
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
