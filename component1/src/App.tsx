
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import { useState } from 'react';


function App() {
  const [alertVisible, setAlertVisibility] = useState (false);
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
           { alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>
            We saved the Cat Queen! 
            <span>
            Here is the victory brothers!!
            </span>
           
           </Alert>}

           <Button onClick={()=>setAlertVisibility(true)}>Release the Black Ninjas</Button>
           
          
     </div>

     
      
     
  );
  
 
}

export default App;
