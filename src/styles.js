import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    color: 'black',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '120px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'rgba(21, 101, 192)',
  },
  image: {
    marginLeft: 20,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '3%',
    borderRadius: 10,
    color: 'white',
    backgroundColor: 'rgba(21, 101, 192)',
    margin: '0 12px',
    textAlign: 'center',
    height: '25vmin',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
      width: '100%',
      height: 'initial',
      '&:nth-of-type(1)': {
        marginBottom: '12px',
      },
    },
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  logoContainer: {

    marginTop: '40vmin',
    padding: '0 5%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
    },
  },
  logo: {
    height: '38vmin',
    borderRadius: '15%',
    position: 'absolute',
    top: '0',
    left: '20%',
    padding: '0 5%',
    margin: '1% 0',
    [theme.breakpoints.down('sm')]: {
      height: '25vmin',
    },
  },
  animeText: {
    height: '7em', // Adjust the height to accommodate two lines
    position: 'absolute',
    padding: '0 5%',
    margin: '1% 0',
    top: '10%', // Move the container up by 10% of its parent's height
    right: '33%', // Move the container to the right by 5% of its parent's width
    [theme.breakpoints.down('sm')]: {
      height: '10em', // Adjust the height for smaller screens
    }

  }

}));


