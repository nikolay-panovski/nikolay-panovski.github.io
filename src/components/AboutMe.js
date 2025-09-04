
import DownloadLogo from "icons/icons8-download-96-light.png";

function AboutMe() {
    return (
        <>
            <h2 className='text-center font-bold mx-auto my-8 text-3xl'>About me</h2>
            <div className="flex flex-col justify-center items-center">
                <div className="card-mx card-my flex flex-row justify-around">
                    <div className="grid gap-4 max-w-xs md:max-w-sm">
                        <div>
                            <img src="/images/aboutme/492686_square.jpg" alt="My face (main)"
                            className="w-full"></img>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <img src="/images/aboutme/aboutme_2.png" alt="My face"></img>
                            <img src="/images/aboutme/aboutme_3.jpg" alt="My face"></img>
                            <img src="/images/aboutme/aboutme_4.png" alt="My face"></img>
                        </div>
                    </div>
                    <p className='text-left px-6 text-lg'>
                    Hello again! I'm Nikolay.
                    <br />
                    <br />
                    I'm a programming graduate from Saxion (NL). I like getting to the bottom of digital problems,
                    and here I find plenty of those. I also have a knack for clicking documentation links
                    and accidentally finding interesting stuff.
                    <br />
                    <br />
                    But above all, I want to see the satisfaction in people when they check out a game or
                    an installation I've worked on! Shall we collaborate on that? Then get in touch with me below!
                    <br />
                    <br />
                    Or would you like a slightly more formal introduction? Check out my resume!
                    </p>
                </div>

                {/* this link is cursed: */}
                <a href="/docs/Resume_Nikolay_Panovski.pdf"
                className="max-w-sm header-btn flex flex-row justify-evenly items-center p-4 mb-4" style={{backgroundColor:"#4e8ab9"}}>
                    <img className="pr-2" src={DownloadLogo} alt="Download logo" width="48px" height="48px" />
                    <p className="font-bold text-2xl">Resume</p>
                </a>
            </div>
        </>
    );
}


export default AboutMe;