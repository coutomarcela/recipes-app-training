import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RecipeModal from "./RecipeModal";
import { getRecipesById } from "../../services/Api";

import "./card.css";

export default function Card({ id, title, image }) {
  const [open, setOpen] = React.useState(false);
  const [details, setDetails] = React.useState(false);
  const handleOpen = async () => {
    const rawData = await getRecipesById(id);
    setDetails(rawData.meals[0]);
    setOpen(true);
  };

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
            bgcolor: "#3C8845",
            "&:hover": { bgcolor: "#2F6D38" },
            fontFamily: "Quicksand",
            fontSize: "1em",
            borderRadius: "20px",
          }}
          onClick={handleOpen}
        >
          Saiba mais
        </Button>
        {/* só vai renderizar o modal se details for verdadeiro, details começa
        como false e ganha novo valor quando setDetails é chamado */}
        {details && (
          <RecipeModal
            handleOpen={handleOpen}
            handleClose={handleClose}
            open={open}
            details={details}
            title={title}
            image={image}
          ></RecipeModal>
        )}
      </div>
    </div>
  );
}
