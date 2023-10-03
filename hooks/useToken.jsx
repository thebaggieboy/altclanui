import { useState, useEffect, useContext } from 'react';
import { TokenContext } from '@/context/TokenContext'

const useToken = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [jwtToken, setJwtToken] = useState(null);
  const { token } = useContext(TokenContext);

		 fetch(url, {
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
		   setJwtToken(token);
		   console.log("Data: ", data);
		   console.log("Token: ", token);
	  
		  })
		  .catch((error) => {
			console.error('Fetch error:', error);
		  });

  return { data, error, jwtToken };
};

export default useToken;
