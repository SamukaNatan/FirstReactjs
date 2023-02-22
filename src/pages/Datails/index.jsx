import { Container, Links, Content } from './style';
import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { Section } from '../../components/section';
import { Tag } from '../../components/tags';
import { ButtonText } from '../../components/buttonText';


export function Datails(){
  return(
    <Container>
      <Header />

      <main>
        <Content>

      <ButtonText title="Excluir Nota" />

      <h1>Introdução ao React</h1>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque dicta placeat vitae doloremque facere nostrum est, odit asperiores, quod laboriosam, eligendi delectus porro! Eligendi doloremque possimus praesentium deserunt at eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugit tempore sed! Omnis doloribus dolorum voluptas. Quaerat architecto magnam velit error? Iste dolores reiciendis cumque consectetur officia possimus, enim perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro labore assumenda optio officiis accusantium nulla iusto rem maxime cum ad minima alias nam recusandae, exercitationem, aliquam quasi. Rem, saepe.</p>

      <Section title="Links Úteis">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
          <li><a href="#">https://github.com/SamukaNatan</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="nodejs" />
      </Section>


      <Button title="Voltar"/>
      </Content>
      </main>
    </Container>
  )
}