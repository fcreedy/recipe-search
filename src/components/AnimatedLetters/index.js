import './index.css'

const AnimatedLetters = (props) => {

    const startFrom = props.startIdx || 0

    return (
        <span>
            {
                props.strArray.map( (char, idx) => {
                    return(
                        <span className="text-animate" data-custom={props.customData} key={idx} style={{animationDelay: `${(idx + startFrom) / 10 + 1}s`}}>
                            {char}
                        </span>
                    )
                })
            }
        </span>
    )
}

export default AnimatedLetters