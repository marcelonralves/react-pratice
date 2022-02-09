import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

function LinkButton({link, title}) {
    return <Link className={styles.button} to={link}>{title}</Link>
}

export default LinkButton