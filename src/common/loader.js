import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Loader = ({ url, name, children }) => {
	const [data, setData] = useState({});

	useEffect(() => {
			try  {
        (async () => {
          const response = await axios.get(url);
          
          setData(response.data);
        })();
      } catch (err) {
        // handle error
        console.log('err', err);
      }
	}, [url]);

	return (
		<>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [name]: data });
        }

        return child;
      })}
		</>
	);
}