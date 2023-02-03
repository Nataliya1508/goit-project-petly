const BASE_URL = "https://goit-project-petly-backend.onrender.com/api";
    
    export const getFriends = async () => {
        const response = await fetch(`${BASE_URL}/services`);
        const result = response.json();
        return result;
    };
