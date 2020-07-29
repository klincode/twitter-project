import React from 'react';
import { S } from './styled'
import { Search } from '@styled-icons/evil/Search'
import { People } from '@styled-icons/ionicons-outline/People'
import { MessageRounded } from '@styled-icons/boxicons-regular/MessageRounded'

import { GuestsPosts } from '../../components/GuestPosts'
const HomePage = () => {
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
        <GuestsPosts />
      </S.RightSide>
    </S.Container >
  );
}

export { HomePage };