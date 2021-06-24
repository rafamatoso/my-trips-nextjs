import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './styles'

const PageTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32}></CloseOutline>
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>Pipipi popopo</p>
    </S.Body>
  </S.Content>
)

export default PageTemplate
