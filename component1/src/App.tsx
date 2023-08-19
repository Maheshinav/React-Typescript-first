import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import {FaCat} from 'react-icons/fa';


function App() {
	const [alertVisible, setAlertVisibility] = useState(false);
	let cats = [
		"Bengal",
		"Russian Blue",
		"Munchkin",
		"Persian",
		"Turkish Angora",
	];
	return (
		<div>
			<ListGroup cats={cats} heading="MY BEST FRIENDS"/>
			<FaCat color="#fb6834" size={40}/>
			{alertVisible && (
				<Alert onClose={() => setAlertVisibility(false)}>
					We saved the Cat Queen!
					<span>Here is the victory brothers!!</span>
				</Alert>
			)}

			<Button onClick={() => setAlertVisibility(true)}>
				Release the Black Ninjas
			</Button>
		</div>
	);
}

export default App;
