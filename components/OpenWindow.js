import React from 'react';

export default function OpenWindow(props){
    return(
        <div id={props.id} className={`open-window ${props.hide ? "md-hide" : ""}`} style={{
            width:props.width,
            top:props.margin && props.margin[0],
            right:props.margin && props.margin[1],
            bottom: props.margin && props.margin[2],
            left: props.margin && props.margin[3],
            zIndex: props.style && props.style.zIndex,
            height: props.height,
        }}>
            <div className="head">
                <div style={{display:"flex",alignItems:'center'}}><box-icon style={{marginRight:'0.5em', width:'1.2em'}} type='solid' name={props.icon}></box-icon> {props.title}</div>
                <div>
                    <box-icon name='minus'></box-icon>
                    <box-icon name='windows'></box-icon>
                    <box-icon name='x'></box-icon>
                </div>
            </div>
            <div className="content">{props.children}</div>
        </div>
    )
}