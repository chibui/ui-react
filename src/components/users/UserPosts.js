import styled from 'styled-components';

import { Loader } from '../../common/loader';
import { PostsList } from '../posts/PostsList';

const UserPostContainer = styled.div`
  margin: 10px;
  padding: 10px;
`

const UserPostsTitle = styled.div`
  font-weight: 600;
  padding: 40px 0;
`

export const UserPosts = (user) => {
  const {name, id} = user.user;
  let queryBaseUrl = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
  
  return(
    <UserPostContainer>
      <UserPostsTitle>Posts from {name}:</UserPostsTitle>
        <Loader 
          name="posts"
          url={queryBaseUrl} >
            <PostsList/>
        </Loader>
    </UserPostContainer>
  )
}