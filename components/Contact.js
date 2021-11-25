import React from 'react';
import OpenWindow from './OpenWindow';

export default function Contact() {
    return(
        <div className="contact">
            <OpenWindow title="contact.html" icon="message" width="calc(100% - 4vw)" margin={["20vh", null, null, "2vw"]}>
                <box-icon name='github' type='logo' ></box-icon>
                <box-icon name='envelope' ></box-icon>
                <box-icon name='linkedin' type='logo' ></box-icon>
            </OpenWindow>
        </div>
    )
}