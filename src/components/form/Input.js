import styles from './Input.module.css'

function Input({name, placeholder, type, text, value, handleOnChange}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input type={type} name={name} id={name}placeholder={placeholder} value={value} onChange={handleOnChange} />
        </div>
    )
}

export default Input