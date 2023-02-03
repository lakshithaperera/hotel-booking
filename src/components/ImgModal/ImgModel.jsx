import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { ColorButton } from "../Navbar/Navbar-styled";
import { ImgGalary, ImgModelSection } from "./ImgModel-styled";
import ImageGaleryCarousel from "../ImageGaleryCarousel/ImageGaleryCarousel";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
};

export default function ImgModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ImgModelSection>
      <ColorButton className="btn" onClick={handleOpen}>
        See All Photos
      </ColorButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <ImgGalary>
             <ImageGaleryCarousel />
              <ul>
                <li><a href="/">Lorem.</a></li>
                <li><a href="/">ipsum.</a></li>
                <li><a href="/">ipsum.</a></li>
                <li><a href="/">ipsum.</a></li>
                <li><a href="/">ipsum.</a></li>
                <li><a href="/">ipsum.</a></li>
                <li><a href="/">ipsum.</a></li>
                <li><a href="/">ipsum.</a></li>
              </ul>
            </ImgGalary>
          </Box>
        </Fade>
      </Modal>
    </ImgModelSection>
  );
}
