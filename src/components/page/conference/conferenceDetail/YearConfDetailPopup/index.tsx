import { YearConfDetailPopupProps } from "./types";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material";
import ConfDetailPopupHeader from "./ConfDetailPopupHeader";
import ConfDetailPopupBody from "./ConfDetailPopupBody";

const boxStyle: SxProps<Theme> = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function YearConfDetailPopup(args: YearConfDetailPopupProps) {
  const { open, onClose, selectedConf } = args;
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={boxStyle}>
        <ConfDetailPopupHeader selectedConf={selectedConf} />
        <ConfDetailPopupBody
          selectedConf={selectedConf}
          onClickItem={() => {}}
        />
      </Box>
    </Modal>
  );
}
