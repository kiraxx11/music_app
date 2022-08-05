import { createTheme } from "@mui/material";
import {deepPurple,teal} from '@mui/material/colors'

const theme=createTheme({
    palette:{
        mode:'dark',
        primary:{
            main:deepPurple[300],
            light:deepPurple[200],
            dark:deepPurple[400],
        },
        secondary:{
            main:teal[400]
        },
    }

})

export default  theme