import styles from './Select.module.css'

function Select({text, name, handleOnChangle, options, value}){
    return(
        <div className={styles.form_control}>
        <label htmlFor={name}>{text}:</label>
        <select name={name} id={name}>
             <option disabled selected>Selecione a categoria</option>
        </select>
        </div>
    )
}

export default Select