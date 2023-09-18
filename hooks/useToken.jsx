import { useState, useEffect, useContext } from 'react';
import { TokenContext } from '@/context/TokenContext'

const useToken = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const id = '';
	const apiUrl = 'http://localhost:8000/api/users/';

  const { token } = useContext(TokenContext);
	const jwtToken = token;
	  
		 fetch(apiUrl, {
		  method: 'GET',
		  headers: {
			Authorization: 'Bearer ' + jwtToken,
		  },
		}).then((response) => {
			if (!response.ok) {

			  if (response.status === 401) {
				// Handle unauthorized access here (e.g., redirect to login page)

				console.error('Unauthorized access');
				console.log('Unauthorized access')
	
			  }
         else {
				throw new Error('Network response was not ok');
			  }

			}
			return response.json();

      
		  })
		  .then((responseData) => {
		   setData(responseData);
      

      console.log("Data: ", data);
		  })
		  .catch((error) => {
			console.error('Fetch error:', error);
		  });

  return { data, error };
};

export default useToken;
