import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { IconButton, Box, Dialog, DialogContentText, DialogTitle, TextField, DialogContent, DialogActions} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
   title: {
     flexGrow: 1
    },

  icon: {
    marginRight: theme.spacing(1),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

const [open, setOpen]=React.useState(false);

const handleClickOpen =() => {
  setOpen(true);
}

const handleClose =() => {
  setOpen(false);
}

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
      <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            My cooking Blog
          </Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log In</Button>
          
              <Dialog open={open} onClose={handleClose} aria-labelledby="registration">
                <DialogTitle id="registration">Log In </DialogTitle>
                  <DialogContent>
                    <DialogContentText>Log In too see all vidios </DialogContentText>
                  <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Adress"
                  type="email"
                  fullWidth
                  />
                  <TextField
                  autoFocus
                  margin="dense"
                  id="pass"
                  label="Password"
                  type="password"
                  fullWidth
                  />
                  </DialogContent>
                  <DialogActions>
                      <Button onClick={handleClose} color="primary">Cancel</Button>
                      <Button onClick={handleClose} color="primary">Log In</Button>
                    </DialogActions>
              </Dialog>
          
          </Box>
          <Button color="secondary" variant="contained">Sign Up</Button>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="lg" style={{backgroundImage: `url(https://st4.depositphotos.com/9701094/38332/i/950/depositphotos_383327866-stock-photo-banner-raw-uncooked-ingredients-cooking.jpghttps://kartinkin.com/uploads/posts/2021-07/thumbs/1625564211_30-kartinkin-com-p-fon-dlya-menyu-desertov-krasivie-foni-32.jpghttps://kartinkin.com/uploads/posts/2021-07/thumbs/1625564211_30-kartinkin-com-p-fon-dlya-menyu-desertov-krasivie-foni-32.jpg)`}}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              All about food
            </Typography>
            <Typography variant="h5" align="center" color="textPrimary" paragraph>
            Daily food magazine published by the founders of Apartment Therapy. Recipes, how-to, kitchen style, and shopping in an easy-to-navigate site.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
              
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
         Мой блог о еде
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          У нас самые доступные и популярные рецепты
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
    
  );
}
