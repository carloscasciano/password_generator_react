 import React from 'react'
 import GitHubIcon from '@material-ui/icons/GitHub'
 import LinkedInIcon from '@material-ui/icons/LinkedIn'
 import Grid from '@material-ui/core/Grid'
 import Link from '@material-ui/core/Link'
 import Typography from '@material-ui/core/Typography'

 const footerStyle = {
    flexShrink: "0",
    textAlign: "center",
    marginTop: "calc(5% + 60px)",
    bottom: "0"
 }

 const iconStyle = {
     padding:"0.3em"
 }

 const FooterInfo = () => {
     return (
         <>     
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={footerStyle}
            >
                <Typography variant="body1">coded by carlos casciano</Typography>
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

 export default FooterInfo