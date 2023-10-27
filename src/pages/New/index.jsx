import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Textarea/index";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { Container, Form } from "./style";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Volar</Link>
          </header>
          <Input placeholder="title" type="text" />
          <Textarea placeholder="observações" />
          <Section title="link uteis">
            <NoteItem value="https:brenolindodemais.com" />
            <NoteItem isNew placeholder="Novo Link" />
          </Section>
          <Section title="Marcadores">
            <div className="tags">

            <NoteItem value="react" />
            <NoteItem isNew placeholder="Nova Tag" />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
