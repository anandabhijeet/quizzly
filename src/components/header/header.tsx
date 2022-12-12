import React from "react";
import {
  AppBar,
  Avatar,
  AvatarGroup,
  Box,
  Button,
  CssBaseline,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import man from "../../assets/images/man.png";
import man1 from "../../assets/images/man1.png";
import man2 from "../../assets/images/man2.png";
import gamer from "../../assets/images/gamer.png";
import woman from "../../assets/images/woman.png";
import { useNavigate } from "react-router";
const drawerWidth = 240;
type Props = {};

const Navbar = (props: Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Box
            sx={{
              display: "flex",
              marginLeft: "auto",
            }}
          >
            <Button onClick={()=>navigate("/quiz")} sx={{ boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", mr:2, borderRadius:"10px", backgroundColor:"#2D2A43", color:"#fff"}}  variant="contained">Start Quiz</Button>
            <Button sx={{mr:2, borderRadius:"10px", border:"2px solid #2D2A43", color:"#2D2A43"}}  variant="outlined">Join Lobby</Button>
            
            <AvatarGroup max={3}>
              <Avatar alt="Remy Sharp" src={man} />
              <Avatar alt="Travis Howard" src={man1} />
              <Avatar alt="Cindy Baker" src={woman} />
              <Avatar alt="Agnes Walker" src={gamer} />
              <Avatar alt="Trevor Henderson" src={man2} />
            </AvatarGroup>
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
};

export default Navbar;
