import { Box, Toolbar } from "@mui/material";
import Navbar from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";


const drawerWidth = 240;
type Props = {
  children?: JSX.Element | JSX.Element[];
};

const HomeLayout: React.FC<Props> = ({children}) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Toolbar/>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p:3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginLeft:`${drawerWidth}px`,
          marginTop:"1px",
          display:"flex",
          justifyContent:"center"
  
        }}
      >
        
        {children}
      </Box>
    </>
  );
};

export default HomeLayout;
