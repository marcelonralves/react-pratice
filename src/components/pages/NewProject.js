import Form from '../Project/Form'
import styles from './NewProject.module.css'

function NewProject(){
    return (
        <section className={styles.newproject_container}>
            <h1>Crie o seu projeto!</h1>
            <p>Preencha os campos abaixo para criar o seu projeto. Após isso você irá preencher as etapas referentes aos serviços desse projeto!</p>
          <Form/>
        </section>
        )
}

export default NewProject