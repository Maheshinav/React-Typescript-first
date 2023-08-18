
import ListGroup from './components/ListGroup';


function App() {
  let cats = [
		"Bengal",
		"Russian Blue",
		"Munchkin",
		"Persian",
		"Turkish Angora",
	];
  return (
    <div>
           <ListGroup cats={cats}  heading="MY BEST FRIENDS"/>
     </div>
  );
  
 
}

export default App;
