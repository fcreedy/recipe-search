
import AnimatedLetters from "./AnimatedLetters"

const About = () => {
    
    return(
        <div className='about-page block'>
            <div className="content-page-title text-5xl">
                <AnimatedLetters strArray={('About').split('')} customData='About' />
            </div>

            <div className="about-summary text-sm leading-relaxed w-3/5 inline-block">
                <p className="my-2">Fiona is a digital communications professional with over 15 years of experience, who recently completed a <a href="https://www.vu.edu.au/courses/graduate-certificate-in-digital-learning-and-teaching-atdi" className="text-green-800 hover:font-semibold hover:underline">Graduate Certificate in Digital Learning and Teaching</a> as well as <a href="https://generalassemb.ly/education/javascript-development/sydney" className="text-green-800 hover:font-semibold hover:underline">training in web development</a>.</p>

                <p className="my-2">With her background in working within cross-functional teams, building constructive relationships with subject-matter experts, and advocating for user-centred design, Fiona brings a unique combination of skills to instructional design and development. She has a proven track record of developing and producing content for a variety of digital channels, with a particular strength in translating complex information for non-specialist audiences.</p>
            </div>

            <a className="link-button bg-apple-yellow text-sm text-center font-semibold rounded-md border-0 m-4 w-56 p-3 hover:drop-shadow-md cursor-pointer duration-500 inline-block" href="https://fionacreedy.myportfolio.com/" title="View Fiona's full portfolio">
                View Fiona&lsquo;s full portfolio
            </a>
           
            <a className="link-button bg-apple-yellow text-sm text-center font-semibold rounded-md border-0 m-4 w-56 p-3 hover:drop-shadow-md cursor-pointer duration-500 inline-block" href="https://www.linkedin.com/in/fionacreedy/" title="View Fiona's LinkedIn profile">
                View Fiona&lsquo;s LinkedIn profile
            </a>

        </div>
    )
}

export default About