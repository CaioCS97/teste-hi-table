import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

import CardComponent from "./CardComponent";

const App = () => {
  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 250
    },
    buttons: {
      minWidth: 350,
      margin: theme.spacing(1),
      display: "flex",
      alignItems: "center",
      justifyContent: "end"
    }
  }));
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <CardComponent />
      <div className={classes.buttons}>
        {/* <Tooltip title="Adicionar">
          <IconButton>
            <AddIcon fontSize="large" color="primary" />
          </IconButton>
        </Tooltip>

        <Button variant="outlined" size="medium" color="primary">
          Salvar
        </Button> */}
      </div>
    </Container>
  );
};

export default App;
