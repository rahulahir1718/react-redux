import { authActions } from "./auth-slice";

export const uploadAuthData = (data) => {
  
    return async (dispatch) => {
        
        const sendData = async () => {

            let requestConfig = {
                url: `http://localhost:4000/AuthData`,
                method: 'PUT',
                body: {isLoggedIn: data.isLoggedIn, userEmail: data.userEmail},
            };

            try
            {   
                const url = requestConfig.url;
                const response  = await fetch(url, {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
                    headers: {'Content-type': 'application/json'}
                });
        
                if(!response.ok)
                    throw new Error("Something went wrong");
        
                const data = await response.json();
        
            }
            catch(error)
            {
                
            }
        };
        sendData();
    }
}

export const getAuthData = () => {
  
    return async (dispatch) => {
        
        const getData = async () => {

            let requestConfig = {
                url: `http://localhost:4000/AuthData`,
                method: 'GET',
            };

            try
            {   
                const url = requestConfig.url;
                const response  = await fetch(url, {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
                    headers: {'Content-type': 'application/json'}
                });
        
                if(!response.ok)
                    throw new Error("Something went wrong");
        
                const data = await response.json();
                dispatch(authActions.set({isLoggedIn: data.isLoggedIn, userEmail: data.userEmail}));
            }
            catch(error)
            {
                
            }
        };

        getData();
    }
}