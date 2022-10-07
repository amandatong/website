import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage'; 
import OpenWindow from './OpenWindow';
import Blob from '../public/images/blob.svg';
import Image from 'next/image'

export default function Home() {
    return(
        <div className="home">
            <OpenWindow title="portrait.png" margin={["12vh", "2vw", null, null]} width="470px" icon="file-image" hide={true}>
                <div style={{display:"flex", justifyContent:'center'}}>
                    <div className="image-container">
                        <Image src="/images/portrait.png" alt="portrait" layout="fill"/>
                    </div>
                    <Blob className="blob"/>
                </div>
            </OpenWindow>
            <OpenWindow title="welcome.txt" margin={["22vh", null, null, "2vw"]} icon="file">
                <div className="title">
                    Hi there! I'm <span className="mark">Amanda</span>, a student studying <span class="mark">computer science</span> and <span class="mark">neuroscience</span> at MIT.
                </div>
            </OpenWindow>
            <div className="dive">
                learn more<br/>
                <box-icon name='down-arrow'></box-icon>
            </div>
            {/* <OpenWindow title="" width="200px" margin={[null, "30vw", "7vh", null]} hide={true}>
                <div className="dive">
                    dive deeper<br/>
                    <box-icon name='down-arrow'></box-icon>
                </div>
            </OpenWindow> */}
        </div>
    )
}