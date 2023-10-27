import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Container, Links,Content } from "./styles.js";
import { Section } from "../../components/section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>

          <ButtonText title="Excluir Nota" />

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit impedit doloremque officiis? Amet at ad enim doloremque, minima ipsum sunt commodi aliquid, blanditiis accusantium a quo tempora sit alias architecto.</p>
          <Section title="Link úTeis">
            <Links>
              <li>
                <a href="#">https://brenolindo.com</a>
              </li>
              <li>
                <a href="#">https://brenolindo.com</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="Node" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}

export default Details;
