import React from 'react';
import { S } from './styled'
import { Search } from '@styled-icons/evil/Search'
import { People } from '@styled-icons/ionicons-outline/People'
import { MessageRounded } from '@styled-icons/boxicons-regular/MessageRounded'
import { GuestsPosts } from '../../components/GuestPosts'
import { showMessage } from '../../helpers/showMessage'
const HomePage = ({ data, errors }) => {

  return (
    <S.Container>
      <S.LeftSide>
        <S.Content>
          <li><Search size="35" /><span> Obserwuj to, co Cię interesuje.</span></li>
          <li><People size="35" /><span>Dowiedz się, o czym mówią inni.</span></li>
          <li><MessageRounded size="35" /><span>Dołącz do rozmowy.</span></li>
        </S.Content>
      </S.LeftSide>

      <S.RightSide>
        <GuestsPosts data={data} />
        {showMessage('server', errors)}
      </S.RightSide>
    </S.Container >
  );
}

export { HomePage };