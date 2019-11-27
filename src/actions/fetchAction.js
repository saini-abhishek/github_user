export const fetch_post = () => {
  return {
    type: "FETCH_USER"
  };
};

export const recieve_post = (post) => {
  return {
    type: "FETCHED_USER",
    data: post
  };
};

export const recieve_error = () => {
  return {
    type: 'RECIEVE_ERROR'
  };
};

export const thunk_action_creator = (username) => {
  const user = username.replace(/\s/g, '');
  return dispatch => {
    dispatch(fetch_post());
     return fetch(`https://api.github.com/users/${user}`)
              .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
                )
              .then((json) => {
                if(json.message==='Not Found'){
                  dispatch(recieve_error());
                }
                else{
                  dispatch(recieve_post(json));
                } 
              })
              .catch(err=>{
                if(err){
                  dispatch(recieve_error());
                }
              })
  }
}