import { Container } from "./style";


// se o loading não for passado, ele sera falso por padrão
export function Button({title,loading = false}) {
  return <Container type="button" disabled={loading}>{loading? "Carregando... " : title}</Container>;
}
