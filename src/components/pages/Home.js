import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
    return (
    <section className={styles.home_container}>
        <h1>Bem vindo ao <b>Costs</b></h1>
        <p>Comece a gerenciar os seus projetos</p>
        <LinkButton link="/" title="Criar Projeto"/>
        <img src={savings} alt="porquinho"></img>
    </section>
    )
}

export default Home