import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CustomChip from './CustomChip'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginTop: "10px"
  },
  media: {
    height: 140,
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: "5px",
    },
  },
});

const demoImage = 'https://thumbs.dreamstime.com/b/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg';

export default function ProfileCard({imageSrc, username, name, followers, following, public_repos, ...props}) {
  const classes = useStyles();
  const [showMore, setShowMore] = useState(false);
  const learnMoreOnClickHandler = () => {
    setShowMore(!showMore);
  }

  return (
    <Card className={classes.card}>
      {/* <CardActionArea> */}
        <CardMedia
          className={classes.media}
          image={imageSrc ? imageSrc : demoImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" color="textSecondary">
            {username}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          { showMore && 
            <>
              <Divider />
              <div className={classes.root}>
                <CustomChip value={followers} label="Followers"/>
                <CustomChip value={following} label="Following"/>
                <CustomChip value={public_repos} label="Public Repos"/>
              </div>
            </>
          }
          
        </CardContent>
      {/* </CardActionArea> */}
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" onClick={learnMoreOnClickHandler}>
          {showMore ? 'Show Less' : 'Show More'}
        </Button>
      </CardActions>
    </Card>
  );
}