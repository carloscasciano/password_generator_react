import React from 'react'
import Typography from '@material-ui/core/Typography'

const titleStyle ={
    margin:"2%"
}

const Title = () => {
    return (
        <>
            <Typography variant="h5" style={titleStyle}>
                Password Generator
            </Typography>
        </>
    )
}

export default Title