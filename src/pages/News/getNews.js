const BASE_URL = "https://goit-project-petly-backend.onrender.com/api";
	
	export const getNews = async () => {
		const response = await fetch(`${BASE_URL}/news`);
		const result = response.json();
		return result;
	};

