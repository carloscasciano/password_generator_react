import React from 'react'
import Button from '@material-ui/core/Button'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import {CopyToClipboard} from 'react-copy-to-clipboard'

const CopyToClipboardButton = (props) => {
    props=props.props
    return (
        <>
            <CopyToClipboard 
                text={props.generatedPassword}>
                <Button
                    variant="contained"
                    color="default"
                    startIcon={<FileCopyIcon />}
                 >
                    COPY
                </Button>
            </CopyToClipboard>
        </>
    )
}

export default CopyToClipboardButton