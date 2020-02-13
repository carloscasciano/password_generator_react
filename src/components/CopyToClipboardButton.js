import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'

const CopyToClipboardButton = (props) => {
    props=props.props
    return (
        <>
            <CopyToClipboard 
                text={props.generatedPassword}>
                <button>Copy to clipboard with button</button>
            </CopyToClipboard>
        </>
    )
}

export default CopyToClipboardButton