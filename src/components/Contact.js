import AnimatedLetters from "./AnimatedLetters"

const Contact = () => {
    
    return(
        <div className="contact-page block">
            <div className="content-page-title text-5xl">
                <AnimatedLetters strArray={('Contact').split('')} customData='Contact' />
            </div>

            <a className="bg-apple-yellow block text-sm text-center font-semibold rounded-md m-4 border-0 w-48 p-3 hover:drop-shadow-md cursor-pointer duration-500" href="https://fionacreedy.myportfolio.com/contact" title="Contact Fiona">
                Contact Fiona
            </a>
            
        </div>
    )
}

export default Contact