import React from "react";
import {
  Container,
  Paper,
  Typography,
  createStyles,
  makeStyles,
  TextField,
  Box,
  Button,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
    },
    root: {
      flexGrow: 1,
    },
    form: {
      "& .MuiTextField-root": {
        marginBottom: theme.spacing(2),
      },
    },
    container: {
      backgroundColor: theme.palette.primary.main,
      margin: "auto",
      justifyItems: "center",
    },
  })
);

export default function LoginPage() {
  const classes = useStyles();
  return (
    // <Box className={classes.container}>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4">Inicie sesión</Typography>
            <Box className={classes.form}>
              <TextField
                label="Usuario"
                type="text"
                variant="outlined"
                fullWidth={true}
              />
              <TextField
                label="Contraseña"
                type="password"
                variant="outlined"
                fullWidth={true}
              />
            </Box>
            <Link to="/">
              <Button color="primary" variant="contained">
                Iniciar sesión
              </Button>
            </Link>
          </Paper>
          {/* </Box> */}
        </Grid>
      </Grid>
    </div>
  );
}
