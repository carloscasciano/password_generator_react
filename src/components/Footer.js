 import React from 'react'
 import {GitHubIcon,LinkedInIcon} from '@material-ui/icons'
 import Grid from '@material-ui/core/Grid'
 import Link from '@material-ui/core/Link'


 const iconStyle = {
     padding:"0.3em"
 }

 const Footer = () => {
     return (
         <>
            
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <p>coded by carlos casciano</p>
                <Link href="https://github.com/carloscasciano/" style={iconStyle}>
                    <GitHubIcon />
                </Link>
                <Link href="https://www.linkedin.com/in/carloscasciano/" >
                    <LinkedInIcon />
                </Link>         
            </Grid>
            
         </>
     )
 }

 export default Footer