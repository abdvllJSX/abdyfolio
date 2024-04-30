import { useSelector } from "react-redux";
import { useEffect } from "react";
import PageTransition from "../../components/page-transition/pageTransition"
import Button from "../../components/Button/button"
import "../projects/projects.scss"
import Navbar from "../../components/navbar/navbar"

const Projects = () => {
    const darkmode = useSelector((state) => state.darkMode?.darkMode)

    useEffect(() => {
        document.body.style = darkmode ? "rgba(207, 246, 255, 1)" : " #1632A0";
    }, [])

    
    const playVideo = (id) => {
        const vid = document.querySelectorAll("video")
        vid.forEach((vid, index) => {
            if (id === index) {
                vid.play()
            }
        });
    }
    const pauseVideo = (id) => {
        const vid = document.querySelectorAll("video")
        vid.forEach((vid, index) => {
            if (id === index) {
                vid.pause()
            }
        });
    }

    const projects = [
        {
            img: "/scribblet.png",
            name: "Scribblet",
            platform: "iOS",
            video: false,
            link: "/scribblet"
        },
        {
            img: "/fezzant.png",
            name: "Fezzant",
            platform: "Website",
            video: false,
            link: "/#"
        },
        {
            img: "/focusFusion.png",
            name: "FocusFusion.AI",
            platform: "MacOS",
            video: false,
            link: "/fusionFocus"
        },
        {
            img: "/widgetX.png",
            name: "WidgetX",
            platform: "VisionOS",
            video: false,
            link: "/#"
        },
        {
            img: "/baz.png",
            name: "BAZ",
            platform: "Fashion",
            video: false,
            link: "/#"
        },
        {
            img: "/cykea.png",
            name: "Cykea",
            platform: "Website",
            video: false,
            link: "/#"
        },
        {
            img: "/scribblet.png",
            name: "Scribblet",
            platform: "iOS",
            video: false,
            link: "/scribblet"
        },
        {
            img: "/fezzant.png",
            name: "Fezzant",
            platform: "Website",
            video: false,
            link: "/#"
        },
        {
            img: "/focusFusion.png",
            name: "FocusFusion.AI",
            platform: "MacOS",
            video: false,
            link: "/fusionFocus"
        },

    ]
    return (
        <div className="wrapper" darkmode={`${darkmode}`}>
            <Navbar iconColor={"rgba(255, 255, 255, 1)"} activeIconColor={"rgba(0, 39, 191, 1)"} />
            <div className="profile_header">
            <Button text={"contact me"} darkmodeBG={"rgba(0, 39, 191, 1)"} darkmodeTX={"rgba(207, 246, 255, 1)"} />
                {/* <HomeIcon color={"#ffffff"} /> */}
            </div>
            <div className="projects">
                {
                    projects.map((project, index) => {
                        return (
                            <div className="projects_container" key={index}>
                                {
                                    project.video ? (
                                        <video loop muted src={project.img} onMouseEnter={() => playVideo(index)} onMouseLeave={() => pauseVideo(index)} > </video>
                                    ) : (<img src={project.img} alt={project.name} />)
                                }
                                <p className="projects_name" darkmode={`${darkmode}`}>{project.name}</p>
                                <p className="projects_platform" darkmode={`${darkmode}`}>{project.platform}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    );
}

export default PageTransition(Projects);