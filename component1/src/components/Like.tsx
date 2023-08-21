import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

const Like = () => {
	const [status, setStatus] = useState(true);
	if (status)
		return (
			<AiFillHeart color="#e91e63" size={30} onClick={() => setStatus(false)} />
		);
	return <AiOutlineHeart size={30} onClick={() => setStatus(true)} />;
};

export default Like;
