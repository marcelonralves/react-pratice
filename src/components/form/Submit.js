import styles from './Submit.module.css'

function Submit({name, text, value, handleOnChange}) {
    return (
        <div >
            <input className={styles.form_control} type="submit" name={name} id={name} value={value} onChange={handleOnChange} />
        </div>
    )
}

export default Submit