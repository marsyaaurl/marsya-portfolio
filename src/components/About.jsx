function About() {
    return(
        <>
            <div className="flex flex-col md:flex-row gap-y-7">
                <div className="flex flex-col px-5 md:px-10 md:py-20 gap-y-5 md:w-1/2">
                    <h1 className="text-whitefont text-xl md:text-4xl font-bold">About me</h1>
                    <p className="text-whitefont text-lg md:text-xl font-medium">
                        I'm an Information Systems undergraduate student with a strong passion for front-end development 
                        and UI/UX design. I enjoy building responsive web applications using React.js and Next.js, and 
                        love translating ideas into user-friendly interfaces with Figma. I'm always eager to learn, 
                        collaborate, and grow through real-world projects.
                    </p>
                    <button className="bg-mainblue text-whitefont font-bold hover:bg-gray-400 rounded-full px-5 py-2 text-lg w-fit">Download CV</button>
                </div>
                <div className="flex flex-col px-5 md:px-10 md:py-20 gap-y-3 md:w-1/2">
                    <h1 className="text-whitefont md:text-4xl font-bold">Skills</h1>
                    <div className="bg-[#2e2e2e] rounded-2xl">
                        <div className="bg-thirdpink text-background font-bold rounded-2xl w-[90%] px-5 py-2">
                            <h1 className="bg-transparent text-xl">React.js</h1>
                        </div>
                    </div>
                    <div className="bg-[#2e2e2e] rounded-2xl">
                        <div className="bg-secondgreen text-background font-bold rounded-2xl w-[80%] px-5 py-2">
                            <h1 className="bg-transparent text-xl">Next.js</h1>
                        </div>
                    </div>
                    <div className="bg-[#2e2e2e] rounded-2xl">
                        <div className="bg-mainblue text-background font-bold rounded-2xl w-[97%] px-5 py-2">
                            <h1 className="bg-transparent text-xl">Tailwind CSS</h1>
                        </div>
                    </div>
                    <div className="bg-[#2e2e2e] rounded-2xl">
                        <div className="bg-thirdyellow text-background font-bold rounded-2xl w-[97%] px-5 py-2">
                            <h1 className="bg-transparent text-xl">Figma</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;