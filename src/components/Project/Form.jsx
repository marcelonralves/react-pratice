import Input from "../form/Input"
import Select from "../form/Select"
import Submit from "../form/Submit"

function Form() {
    return (
        <form>
            <Input type="text" name="project_name" placeholder="Insira o nome do projeto" text="Nome do Projeto"/>
            <Input type="text" name="project_price" placeholder="Insira o orçamento do projeto" text="Orçamento do projeto"/>
            <Select name="category_id" text="Categoria"/>
            <Submit name="send" value="Criar Projeto"/>
        </form>
    )
}

export default Form