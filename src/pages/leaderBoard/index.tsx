import {Box, Grid, Typography, Stack} from '@mui/material';
import gamer from '../../assets/images/gamer.png';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import FlagIcon from '@mui/icons-material/Flag';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import AddTaskIcon from '@mui/icons-material/AddTask';
import "./index.css"
import AchievementInventory from './components/achievement-inventory';
type Props = {}

const LeaderBoard = (props: Props) => {
  return (
    <>
    <Box sx={{width:"1200px"}}>
        <Grid container>
            <Grid item xs={12} sm={2} sx={{p:1, display:"flex", alignItems:"center"}}>
                <Box className="avatar-box" sx={{}}>
                    <img src={gamer} alt="avatar" width="100%" />
                </Box>
            </Grid>
            <Grid item xs={12} sm={10} sx={{px:1, p:2}} >
             <Box> 
             <Stack>
               <Typography variant='h3'>Abhijeet Anand</Typography>
                <Typography sx={{fontWeight:800, color:"#CAD0E0"}} variant='subtitle2'>Bonus Booster, 24 |v</Typography>
                <BorderLinearProgress sx={{mt:2}} variant="determinate" value={65} />
                <Box sx={{ mt:2, display:"flex"}}>
                    <Box sx={{display:"flex", alignItems:"center"}}>
                        <Box className="acievements-box" ><FlagIcon/></Box>
                        <Stack sx={{mx:2}}>
                            <Typography sx={{m:0, fontWeight:600}} variant='h5'>27</Typography>
                            <Typography sx={{fontWeight:800, color:"#CAD0E0", m:0}} variant="subtitle2">Game Wins</Typography>
                        </Stack>
                    </Box>
                    <Box sx={{display:"flex", alignItems:"center"}} >
                        <Box className="acievements-box" ><ArrowCircleUpIcon/></Box>
                        <Stack sx={{mx:2}}>
                            <Typography sx={{m:0, fontWeight:600}} variant='h5'>910</Typography>
                            <Typography sx={{fontWeight:800, color:"#CAD0E0", m:0}} variant="subtitle2">Highest Score</Typography>
                        </Stack>
                    </Box>
                    <Box  sx={{display:"flex", alignItems:"center"}}>
                        <Box className="acievements-box"><AddTaskIcon/></Box>
                        <Stack sx={{mx:2}}>
                            <Typography sx={{m:0, fontWeight:600}} variant='h5'>218</Typography>
                            <Typography sx={{fontWeight:800, color:"#CAD0E0", m:0}} variant="subtitle2">Correct Answer</Typography>
                        </Stack>
                    </Box>
                </Box>
             </Stack>
             </Box>
            </Grid>
           
        </Grid>
        <Grid container sx={{mt:5, pt:3}}>
        <Grid item xs={12} sm={6} sx={{p:1}}>
                <AchievementInventory title='Achievement' earned_badge={8} progress={45} />
            </Grid>
            <Grid item xs={12} sm={6} sx={{p:1}}>
            <AchievementInventory title='Inventory' earned_badge={5} progress={65} />
            </Grid>
        </Grid>
    </Box>
    </>
    
  )
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#FFAAE3' : '#FC9773',
    },
  }));

export default LeaderBoard;