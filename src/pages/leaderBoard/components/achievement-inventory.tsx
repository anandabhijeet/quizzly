import { Box, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import "./achievement-inventory.css";
import badge from "../../../assets/images/badge.png";
import star from "../../../assets/images/star.png";

// type Props = {
//   title:
// };

interface Props {
title:string,
earned_badge:number,
progress:number,
}

const AchievementInventory = ({title, earned_badge, progress}: Props) => {
  return (
    <>
      <Box className="achiementsInventory-box" sx={{ p: 3 }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5">{title}</Typography>
            <Box
              sx={{
                borderRadius: "8px",
                height: "30px",
                width: "30px",
                backgroundColor: "#F0F0F0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mx: 1,
              }}
            >
              <Typography variant="subtitle2">{earned_badge}</Typography>
            </Box>
          </Box>
          <Box sx={{ width: "40%", ml: "auto" }}>
            <BorderLinearProgress
              sx={{ mt: 2 }}
              variant="determinate"
              value={progress}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            p: 2,
            flexWrap: "wrap",
          }}
        >
          {[1, 2, 3, 4, 5].map((el, index) => (
            <Box className="pentagon">
              {index % 2 === 0 ? (
                <img src={badge} width="50px" alt="badge" />
              ) : (
                <img src={star} width="50px" alt="badge" />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#FFAAE3" : "#FC9773",
  },
}));

export default AchievementInventory;
