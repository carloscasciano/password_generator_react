import React from 'react'
import Button from '@material-ui/core/Button'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import {CopyToClipboard} from 'react-copy-to-clipboard'

const buttonStyle = {
    width:'12em',
    height: '6em',
    marginLeft: '1em'
}

const CopyToClipboardButton = (props) => {
    props=props.props
    return (
        <>
            <CopyToClipboard 
                text={props.generatedPassword}>
                <Button
                    color="default"
                    startIcon={<FileCopyIcon />}
                    size="small"
                    style={buttonStyle}
                 >
                    COPY
                </Button>
            </CopyToClipboard>
        </>
    )
}

export default CopyToClipboardButton