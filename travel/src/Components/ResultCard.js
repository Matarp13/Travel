import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: "8px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  margin: {
    margin: theme.spacing.unit,
    width: '70px !important'
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  text: {
      fontFamily: 'inherit',
      display: 'flex'
  },
  action : {
    marginTop: '8px'
  }
});

class ResultCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
        <Card className={classes.card}>
        <CardHeader style={{direction: "rtl"}}
          classes={{title: classes.text, subheader: classes.text, action: classes.action}}
          title={this.props.result.name}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          subheader={this.props.result.subText}
        />
        <CardMedia
          className={classes.media}
          image={this.props.result.imageURL}
        />
        <CardContent>
          <Typography component="p">
              {this.props.result.tags.map((tag) => {
                  return (<Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="Add"
                    className={classes.margin}
                >
                {tag}
                </Fab>)
              })}
          <div>
        </div>
          </Typography>
        </CardContent>
        
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
          >
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {this.props.result.avatar}
            </Avatar>
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(ResultCard);