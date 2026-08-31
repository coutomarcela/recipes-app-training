import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RecipeModal from "./RecipeModal";

import "./card.css";

export default function Card({ title, image, instructions }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="card__container">
      <div className="card">
        <img src={image} alt="" className="card__image" />
        <h3 className="card__title">{title}</h3>
        <Button
          variant="contained"
          aria-label="Basic button group"
          className="card__button"
          sx={{
            bgcolor: "#5a8d38",
            "&:hover": { bgcolor: "#406427" },
            fontFamily: "Elms Sans",
            fontSize: "1em",
          }}
          onClick={handleOpen}
        >
          Saiba mais
        </Button>
        <RecipeModal
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
          instructions={instructions}
          title={title}
          image={image}
        ></RecipeModal>
      </div>
    </div>
  );
}
