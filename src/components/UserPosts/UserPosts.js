import React from 'react';
import { S } from './styled';
import { H3 } from '../Shared'
import { MessageRounded } from '@styled-icons/boxicons-regular/MessageRounded';
import { ArrowShuffle } from '@styled-icons/typicons/ArrowShuffle';
import { Heart } from '@styled-icons/boxicons-regular/Heart';
import { ShareAlternative } from '@styled-icons/entypo/ShareAlternative';
import { Search } from '@styled-icons/evil/Search'

import user from '../../img/user.jpg'
const UserPosts = () => {
  return (
    <S.Container>
      <S.H2>Główna</S.H2>
      <S.Posts>
        <S.Post>
          <S.UserImg><img src={user} alt="" /></S.UserImg>
          <S.Content>
            <header>
              <H3>Adam Klin</H3>
              <span>@adamklin</span>
              <span>4 lip</span>
            </header>
            <S.Text>
              I'm shocked and amazed at the same time Twarz z otwartymi ustami shocked by bank using assets they don't control, and their dickmove to use web.archive bandwidth instead of own. Amazed by how pure hacky it is #webdev #javascript
            </S.Text>
            <S.Icons>
              <span><MessageRounded size="20" />1</span>
              <span><ArrowShuffle size="20" />6</span>
              <span><Heart size="20" />10</span>
              <span><ShareAlternative size="20" /></span>
            </S.Icons>
          </S.Content>
        </S.Post>

        <S.Post>
          <S.UserImg><img src={user} alt="" /></S.UserImg>
          <S.Content>
            <header>
              <H3>Adam Klin</H3>
              <span>@adamklin</span>
              <span>4 lip</span>
            </header>
            <S.Text>
              I'm shocked and amazed at the same time Twarz z otwartymi ustami shocked by bank using assets they don't control, and their dickmove to use web.archive bandwidth instead of own. Amazed by how pure hacky it is #webdev #javascript
            </S.Text>
            <S.Icons>
              <span><MessageRounded size="20" />1</span>
              <span><ArrowShuffle size="20" />6</span>
              <span><Heart size="20" />10</span>
              <span><ShareAlternative size="20" /></span>
            </S.Icons>
          </S.Content>
        </S.Post>

        <S.Post>
          <S.UserImg><img src={user} alt="" /></S.UserImg>
          <S.Content>
            <header>
              <H3>Adam Klin</H3>
              <span>@adamklin</span>
              <span>4 lip</span>
            </header>
            <S.Text>
              I'm shocked and amazed at the same time Twarz z otwartymi ustami shocked by bank using assets they don't control, and their dickmove to use web.archive bandwidth instead of own. Amazed by how pure hacky it is #webdev #javascript
            </S.Text>
            <S.Icons>
              <span><MessageRounded size="20" />1</span>
              <span><ArrowShuffle size="20" />6</span>
              <span><Heart size="20" />10</span>
              <span><ShareAlternative size="20" /></span>
            </S.Icons>
          </S.Content>
        </S.Post>

        <S.Post>
          <S.UserImg><img src={user} alt="" /></S.UserImg>
          <S.Content>
            <header>
              <H3>Adam Klin</H3>
              <span>@adamklin</span>
              <span>4 lip</span>
            </header>
            <S.Text>
              I'm shocked and amazed at the same time Twarz z otwartymi ustami shocked by bank using assets they don't control, and their dickmove to use web.archive bandwidth instead of own. Amazed by how pure hacky it is #webdev #javascript
            </S.Text>
            <S.Icons>
              <span><MessageRounded size="20" />1</span>
              <span><ArrowShuffle size="20" />6</span>
              <span><Heart size="20" />10</span>
              <span><ShareAlternative size="20" /></span>
            </S.Icons>
          </S.Content>
        </S.Post>

        <S.Post>
          <S.UserImg><img src={user} alt="" /></S.UserImg>
          <S.Content>
            <header>
              <H3>Adam Klin</H3>
              <span>@adamklin</span>
              <span>4 lip</span>
            </header>
            <S.Text>
              I'm shocked and amazed at the same time Twarz z otwartymi ustami shocked by bank using assets they don't control, and their dickmove to use web.archive bandwidth instead of own. Amazed by how pure hacky it is #webdev #javascript
            </S.Text>
            <S.Icons>
              <span><MessageRounded size="20" />1</span>
              <span><ArrowShuffle size="20" />6</span>
              <span><Heart size="20" />10</span>
              <span><ShareAlternative size="20" /></span>
            </S.Icons>
          </S.Content>
        </S.Post>
      </S.Posts>
    </S.Container>
  );
}

export { UserPosts };