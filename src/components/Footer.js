 import React from 'react'
 import GitHubIcon from '@material-ui/icons/GitHub'
 import LinkedInIcon from '@material-ui/icons/LinkedIn'
 import Grid from '@material-ui/core/Grid'
 import Link from '@material-ui/core/Link'


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
                <Link href="https://github.com/carloscasciano/">
                    <GitHubIcon />
                </Link>
                <Link href="https://www.linkedin.com/in/carloscasciano/">
                    <LinkedInIcon />
                </Link>
                
            </Grid>
            
         </>
     )
 }

 export default Footer