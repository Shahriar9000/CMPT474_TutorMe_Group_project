import { FETCH_STUDENT } from './types';


  export  const  logIn = inputData =>  dispatch => {
    fetch('https://ksc2toqk8k.execute-api.us-east-1.amazonaws.com/dev/auth',{
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(inputData)
  })
    .then(
      res => res.json())
    .then( data =>
      dispatch({
        type: FETCH_STUDENT,
        payload: data
      })
    );
    
};

export  const  reset = inputData =>  dispatch => {
  dispatch({
    type: FETCH_STUDENT,
    payload: {}
  })
  
};
