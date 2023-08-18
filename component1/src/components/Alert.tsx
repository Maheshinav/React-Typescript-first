import { ReactNode } from "react";

interface Props {
    children:ReactNode;
}

const Alert = ({children}:Props) => {
  return (
    <>
    
    <hr className="hr" />
    <div className="alert alert-success" role="alert"> {children}
</div>
</>
  )
}
export default Alert

