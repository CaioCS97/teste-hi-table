import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

import CardComponent from "./components/CardComponent/CardComponent";

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

  const [items, setItems] = useState([
    {
      description: "Learn about React",
      planet: "Hoth"
    },
    {
      description: "Learn about React",
      planet: "Hoth"
    }
  ]);

  const addItem = text => { 
    const newItems = [...items, { text }];
    setItems(newItems);
  };

  return (
    <Container className={classes.container}>
      {items.map((item, index) => (
          <CardComponent
            key={index}
            index={index}
            item={item}
            addItem={addItem}
          />
        ))}
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
