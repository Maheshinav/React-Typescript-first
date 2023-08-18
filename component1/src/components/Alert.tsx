import { ReactNode } from "react";
import { useState } from "react";

interface Props {
	children: ReactNode;
    onClose: ()=> void;
}

const Alert = ({ children,onClose }: Props) => {
	return (
		<>
			<hr className="hr" />
			<div className="alert alert-success alert-dismissible" role="alert">
				{children}
				<button
					type="button"
					className="btn-close"
					data-bs-dismiss="alert"
					aria-label="Close"
                    onClick={onClose}
				></button>
			</div>
		</>
	);
};
export default Alert;
