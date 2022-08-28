import React from 'react';
import OpenWindow from './OpenWindow';

export default function About() {
    const skills = [
        "React", "React Native", "Python", "Java", "HTML", "CSS",  "Flask", "SASS/SCSS", "Javascript", 
        "Firebase", "MongoDB", "PostgreSQL", "Bootstrap",
        "Ruby on Rails"  
    ]

    const languages = {
        "English": 100,
        "Korean": 65,
        "French": 40,
    }

    const get_languages = () => {
        let lang_divs = [];
        for(const [key, val] of Object.entries(languages)){
            lang_divs.push(
            <div className="progress-bar-container">
                <div className="progress-bar">
                    <div className="progress" style={{width:`calc(${val}% - 2em)`}}>{key}</div>
                </div>
            </div>)
        }
        return lang_divs;
    }

    return(
        <div className="about">
            <OpenWindow style={{zIndex: 999}} title="about.txt" margin={["20vh", "2vw", null, null]} icon="user-circle">
                <p>I'm a junior at MIT majoring in Computer Science and Neuroscience, with an intended minor in Linguistics.</p>
                <p>I'm currently a head of the development team at <a target="_blank" href="http://hackmit.org/">HackMIT</a>. Most recently, I wrapped up an internship in Seoul, South Korea with Hyundai Motor Company in their division working on a smart factory in Singapore.</p>
        
                <p>In the past, I was a UI/UX design and front-end engineer intern at the MIT Media Lab. I've also developed algorithms for a <a target="_blank" href="/files/3D Depth Imaging for Assistive Guidance.pdf">computer vision research project</a> where we utilized 3D depth imaging for assistive guidance. I've also made a prototype social media platform at Fintech Focus and worked on autonomous robots during my time competing in FIRST Robotics.</p>
                <p>I also compete with <a target="_blank" href="http://mitmocktrial.weebly.com/">MIT Mock Trial</a>, where I'm currently a team co-captain and publicity chair. I also take photos for <a target="_blank" href="https://issuu.com/mit_infinite">Infinite Magazine</a>. I love to cook, travel, and learn new languages. Currently, I'm learning Korean!</p>
            </OpenWindow>
            <div className="about-misc">
                <OpenWindow id="skills" title="skills.html" width="500px" margin={["25vh", null, null, "2vw"]} icon="bar-chart-alt-2">
                    <div className="skills">
                        {skills.map(skill => {
                            return(
                                <div className="skill">{skill}</div>
                            )
                        })}
                    </div>
                </OpenWindow>
                <OpenWindow id="languages" title="languages.ttf" width="300px" margin={[null, null, "7vh", "18vw"]} icon="pen">
                    {get_languages()}
                </OpenWindow>
            </div>
        </div>
    )
}