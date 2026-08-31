import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import "./card.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 380,
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  overflow: "hidden",
  fontFamily: "Elms Sans",
};

export default function RecipeModal({
  handleClose,
  open,
  title,
  image,
  instructions,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            src={image}
            sx={{
              width: "100%",
              height: 200,
              objectFit: "cover",
              display: "block",
            }}
          />
          <IconButton
            aria-label="fechar"
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              bgcolor: "rgba(255,255,255,0.9)",
              "&:hover": { bgcolor: "rgba(255,255,255,1)" },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box sx={{ p: 2.5, maxHeight: 280, overflowY: "auto" }}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: 600, mb: 2, fontFamily: "Elms Sans" }}
          >
            {title}
          </Typography>
          <Typography
            id="modal-modal-description"
            color="text.secondary"
            sx={{ lineHeight: 1.7, fontFamily: "Ubuntu", textAlign: "justify" }}
          >
            {instructions}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}
