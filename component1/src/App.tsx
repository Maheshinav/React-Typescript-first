
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';


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
           <Alert>
            The Cat Has Found! 
            <span>
            Here is the victory
            </span>
           
           </Alert>
          
     </div>

     
      
     
  );
  
 
}

export default App;
