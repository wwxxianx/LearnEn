import Styles from "./Quote.module.css"

const Quote = ({ children }) => {
    return (
        <div className={Styles.container}>
            {children}
        </div>
        )
}

export default Quote
