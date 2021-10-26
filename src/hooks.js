import axios from "axios";
import { useState } from "react";
import uuid from "uuid";

function useFlip(initialVal = false) {
	const [value, setValue] = useState(initialVal);
	const toggle = () => {
		setValue((oldValue) => !oldValue);
	};

	return [value, toggle];
}

function useAxios(url) {
	const [data, updateData] = useState([]);
	const addData = async (route = "") => {
		const response = await axios.get(url + route);
		updateData((oldData) => [...oldData, { ...response.data, id: uuid() }]);
	};

	return [data, addData];
}

export { useFlip, useAxios };
