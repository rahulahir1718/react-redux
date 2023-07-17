import { counterActions } from "./counter-slice";

export const uploadCounterData = (counter) => {
  
    return async (dispatch) => {
        
        const sendData = async () => {

            let requestConfig = {
                url: `http://localhost:4000/CounterData`,
                method: 'PUT',
                body: {counter: counter},
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

export const getCounterData = () => {
  
    return async (dispatch) => {
        
        const getData = async () => {

            let requestConfig = {
                url: `http://localhost:4000/CounterData`,
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
                dispatch(counterActions.set(data.counter));
            }
            catch(error)
            {
                
            }
        };

        getData();
    }
}