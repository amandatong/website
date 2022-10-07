import React from 'react';
import OpenWindow from './OpenWindow';
import Image from 'next/image'

export default function Projects() {

    const projects = [
        {
            title: "Explore HMGICS Technology",
            image: "/images/hmgics.png",
            desc: "Interactive, animated website explaining the technology used at Hyundai's smart factory in Singapore. Aimed to build trust with customers about the manufacturing process within a smart factory. Built and designed from scratch, prototyped, then presented and pitched to the lead designers. Features translations in both English and Korean.",
            tags: ["React", "Next.js", "Framer", "React Spring"],
            links: [ {
                    url: "https://hmgicstech.vercel.app/",
                    icon: <box-icon name='link-external' ></box-icon>,
                },{
                    url: "https://www.figma.com/file/O5HZecaM3NK8uYq1KRXaCw/Smart-Factory-Website-Design?node-id=39%3A378",
                    icon: <box-icon type='logo' name='figma'></box-icon>,
                }
            ]
        },
        {
            title: "Collectorly",
            image: "/images/collectorly.png",
            desc: "Online website for merchandise collectors to track the progress of their collections and items they have in transit. Currently in progress.",
            tags: ["React", "Firebase", "Express", "Node.js"],
            links: [ {
                    url: "http://collectorly.herokuapp.com/",
                    icon: <box-icon name='link-external' ></box-icon>,
                }
            ]
        
        },
        {
            title: "HackMIT Mobile",
            image: "/images/hackmit_app.png",
            desc: "iOS and Android app used by hackathon participants to create custom schedules and log event attendance",
            tags: ["React Native", "Firebase", "iOS", "Android"],
            link: "https://apps.apple.com/us/app/hackmit/id1582182786",
            links: [ {
                    url: "https://apps.apple.com/us/app/hackmit/id1582182786",
                    icon: <box-icon name='apple' type='logo' ></box-icon>,
                }
            ]
        },
        {
            title: "Teacher-Student Progress UI",
            image: "/images/progress_ui.png",
            desc: "Website for teachers and parents to intuitively understand data about their student's progress in literacy education through a user-friendly interface.",
            tags: ["React", "Flask", "Firebase"],
        },
        {
            title: "3D Depth Imaging for Assistive Guidance",
            image: "/images/vision.png",
            desc: "A research project that developed a smart cane for the visually impaired, where 3D depth imaging from a camera was dynamically mapped to a corresponding level of vibration intensity for the user to be notified of nearby objects in a tactile manner.",
            tags: ["Java", "C++", "Arduino", "Computer Vision"],
            links: [
                {
                    url: "https://github.com/EliL123/Smart-Cane",
                    icon: <box-icon name='github' type='logo' ></box-icon>,
                },
                {
                    url: "/files/3D%20Depth%20Imaging%20for%20Assistive%20Guidance.pdf",
                    icon: <box-icon name='info-circle' ></box-icon>,
                }
            ]
        },
        {
            title: "Study Buddies",
            image: "/images/studybuddies.png",
            desc: "A prototype social media website to encourage peer tutoring from around the world by balancing each others' strengths and weaknesses.",
            tags: ["HTML/CSS", "Flask", "Jinja", "MongoDB"],
            links: [
                {
                    url: "https://github.com/EvilJesster/studybuddies",
                    icon: <box-icon name='github' type='logo' ></box-icon>,
                }
            ]
        },
        {
            title: "HackMIT Puzzle",
            image: "/images/puzzle.png",
            desc: "An algorithmic puzzle designed as a lighthearted challenge for HackMIT applicants. I designed the JavaScript game made to exemplify the strategy needed to first solve the puzzle, as well the Python solution.",
            tags: ["HTML/CSS", "CanvasJS"]
        },
        {
            title: "HackMIT 2021 Splash & DayOf",
            image: "/images/hackmit.png",
            desc: "The homepage for HackMIT, which is seen by thousands of applicants every year and designed to encourage high school and college students' innovation in programming.",
            tags: ["HTML/CSS", "Javascript"],
            links: [
                {
                    url: "http://hackmit.org/",
                    icon: <box-icon name='link-external' ></box-icon>,
                }
            ]
        }
    ]

    return(
        <div className="projects">
            <OpenWindow title="Projects" width="calc(100% - 4vw)" margin={["10vh", "2vw", null, "2vw"]} icon="folder">
                <div className="big-proj-container">
                    <div className="project-container">
                        {projects.map(proj => {
                            return(
                                <div className="project">
                                    <div className="image" style={{backgroundImage:`url(${proj.image})`}}></div>
                                    <div className="desc">
                                        <div className="title">
                                            <div>{proj.title}</div> 
                                            <div className="project-links">
                                                {proj.links && proj.links.map(l => {
                                                    return(
                                                        <a href={l.url} target="_blank">{l.icon}</a>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="tags">{proj.tags.map(t => {
                                            return(
                                                <div className="tag">{t}</div>
                                            )
                                        })}
                                        </div>
                                        <div className="text">{proj.desc}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </OpenWindow>
        </div>
    )
}