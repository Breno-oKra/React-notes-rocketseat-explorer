import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { Container, Brand, Menu, Search, Content, NewNote } from "./style";
import { FiPlus,FiSearch} from "react-icons/fi"

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header/>

      <Menu>
            <li><ButtonText title="todos"  $isactive /></li>
            <li><ButtonText title="react"  /></li>
            <li><ButtonText title="javascript"/></li>
      </Menu>
      <Search>
            <Input placeholder="Pesquisar pelo Titulo" icon={FiSearch}/>
      </Search>
      <Content>
        <Section title="Minhas Notas">
            <Note 
            data={{
                title:"React", 
                tags:[
                    {id:"2",name:"react"},
                    {id:'3',name:"node"}
                ]

                }}/>
        </Section>
      </Content>
      <NewNote to="/new">
        <FiPlus/>
        Criar Nota
      </NewNote>
    </Container>
  );
}
