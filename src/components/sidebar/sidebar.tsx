import * as React from "react";
import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import logo from "../../assets/images/Black and White Minimal Monogram Logo.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux/es/exports";
import { getQuestions } from "../../store/slices/questionSlice";
import { Difficulty } from "../../api/API";


const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

const Sidebar = (props: Props) => {
  const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [category, setCategory] = React.useState<string|undefined>();
  const [categoryValue, setCategoryValue] = React.useState<number|undefined>();
  const [mode, setMode] = React.useState<Difficulty | any>(Difficulty.EASY);
  const [expanded, setExpanded] = React.useState<boolean>(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const dispatch:any = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();

    setMode(e.target.value)

  }
  
  
  // const handleChangeCategory = (e: React.ChangeEvent<HTMLInputElement>)=>{
  //   e.preventDefault();
  //   setCategory(e.target.value)
  // }

  

  const drawer = (
    console.log("mode",mode),
    console.log("category",category),
    console.log("value",categoryValue ),

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Toolbar >
        <img
          src={logo}
          alt="logo"
          width="50px"
          style={{ borderRadius: "100%" }}
        />
        <h3 style={{ margin: "0px 16px 0px 16px" }}>Quizzly</h3>
      </Toolbar>
      <Divider  />
      <List sx={{mt:5}}>
        <ListItem disablePadding>
          <ListItemButton 
            onClick={()=>navigate("/")}
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
                color: "#fd9979",
              },
              color: "#000",
            }}
          >
            <ListItemIcon
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#fd9979",
                },
              }}
            >
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Leaderboard"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
                color: "#fd9979",
              },
              color: "#000",
            }}
          >
            <ListItemIcon
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#fd9979",
                },
              }}
            >
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Support"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{mt:1}}>
          <Accordion expanded={expanded}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              onClick={()=>(setExpanded(!expanded), console.log(expanded))}
            >
              <Typography>Custom Quiz</Typography>
            </AccordionSummary>
            <AccordionDetails>  
              <FormControl>
                <FormLabel
                  sx={{ color: "#fd9979" }}
                  id="demo-row-radio-buttons-group-label"
                >
                  Mode
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleChange(e)}
                  // value={slected}
                >
                  <FormControlLabel
                    value={Difficulty.EASY}
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#fd9979",
                          },
                          "& .MuiSvgIcon-root": {
                            fontSize: 16,
                          },
                        }}
                      />
                    }
                    label="Easy"
                    sx={{ fontSize: "13px !important" }}
                  />
                  <FormControlLabel
                    value={Difficulty.MEDIUM}
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#fd9979",
                          },
                          "& .MuiSvgIcon-root": {
                            fontSize: 16,
                          },
                        }}
                      />
                    }
                    label="Medium"
                    sx={{ fontSize: "13px !important" }}
                  />
                  <FormControlLabel
                    value={Difficulty.HARD}
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#fd9979",
                          },
                          "& .MuiSvgIcon-root": {
                            fontSize: 16,
                          },
                        }}
                      />
                    }
                    label="Hard"
                    sx={{ fontSize: "13px !important" }}
                  />
                </RadioGroup>
              </FormControl>
             <Box sx={{ mt:2}} >
             <FormLabel
                  sx={{ color: "#fd9979" }}
                  id="category-select"
                >
                  Category
                </FormLabel>
              <Autocomplete
                id="category-select"
                sx={{ width: "100%" }}
                options={quizCategory}
                onChange={(event, value) => {setCategory(value?.category);setCategoryValue(value?.categoryValue) }}
                autoHighlight
                getOptionLabel={(option) => option.category}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    
                    {...props}
                  >
                    {option.category}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                  sx={{my:1}}
                    {...params}
                    label="Select category"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                    size="small"
                  />
                )}
              />
             </Box> 

             <Box sx={{width:"100%", mt:1}}>
             <Button onClick={()=>(dispatch(getQuestions({amount:10, difficulty:mode, category:categoryValue})), setExpanded(false))} size="small" color="warning" variant="contained">Submit</Button>
             </Box>
            </AccordionDetails>
          </Accordion>
        </ListItem>
      </List>
    </div>
  );
  

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
      aria-label="mailbox folders"
    >
      <CssBaseline />
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

interface quiz_category {
  category: string;
  categoryValue: number;
}

const quizCategory: readonly quiz_category[] = [
  { category: "Science", categoryValue: 17 },
  { category: "Politics", categoryValue: 24 },
  { category: "Entertainment", categoryValue: 11 },
  { category: "Sports", categoryValue: 21 },
  { category: "History", categoryValue: 23 },
];

export default Sidebar;
