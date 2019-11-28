import React, { useState } from "react";
import "./styles.css"
import { connect } from 'react-redux';
import { Typography, TextField, Button} from '@material-ui/core';
import { thunk_action_creator } from "./actions/fetchAction";
import ProfileCard from './ProfileCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 'auto',
    width: "40%"
  },
}));

function App({data, ...props}) {
  const classes = useStyles();
  const { userData } = data;
  const [ state,setState ] = useState({input : ''})
  const onInputChange = (event) => {
    setState({input: event.target.value});
  }
  const onSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(state.input);
  }

  return (
    <div>
      <Paper className={classes.root}>
        <form onSubmit={onSubmit} noValidate autoComplete="off">
          <Typography color="textSecondary" gutterBottom variant="h2"></Typography>
          <div>
            <TextField
              id="outlined-basic"
              name="input"
              label="Username"
              margin="normal"
              variant="outlined"
              value={state.input}
              onChange={onInputChange}
              />
          </div>
          <div>
            <Button variant="outlined" color="primary" type="submit">Search</Button>
          </div>
        </form>

        {
          data.isFetching ? 
            <CircularProgress size={75} /> :
            data.isError ?
              <h2>User Not Found ... </h2> :
              !data.userData ? null :
              <ProfileCard 
                imageSrc={userData.avatar_url}
                name={userData.name}
                username={userData.login}
                followers={userData.followers}
                following={userData.following}
                public_repos={userData.public_repos}
              />
        }
      </Paper>
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: data => {
      dispatch(thunk_action_creator(data));
    }
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
