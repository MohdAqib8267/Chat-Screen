import React from "react";
import { EditIcon, ArrowBackIcon } from "@chakra-ui/icons";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Navbar.css";

const Navbar = ({ Info }) => {
  // console.log(Info)
  return (
    <div className="chat-header">
      <div className="upper">
        <span
          style={{
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
            alignItems: "center",
            color: "#141E0D",
          }}
        >
          <ArrowBackIcon style={{ transform: "scale(1.5)" }} />
          <b style={{ fontSize: "24px" }}>{Info.name}</b>
        </span>
        <span style={{ transform: "scale(1.5)" }}>
          <EditIcon />
        </span>
      </div>
      <div className="lower">
        <div className="left">
          <div>
            <AccountCircleIcon
              style={{
                transform: "scale(1.8)",
              }}
            />
          </div>
          <div>
            <div style={{ color: "#606060", fontSize: "16px" }}>
              From:{" "}
              <b style={{ color: "#141E0D", fontSize: "18px" }}>{Info.from}</b>
            </div>
            <div>
              To:{" "}
              <b style={{ color: "#141E0D", fontSize: "18px" }}>{Info.to}</b>
            </div>
          </div>
        </div>
        <div className="right">
          <MoreVertIcon />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Navbar;
