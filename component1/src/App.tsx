
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';


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
            We saved the Cat Queen! 
            <span>
            Here is the victory brothers!!
            </span>
           
           </Alert>

           <Button onClick={()=>console.log("Released the Army")}>Release the Black Ninjas</Button>
           
          
     </div>

     
      
     
  );
  
 
}

export default App;
