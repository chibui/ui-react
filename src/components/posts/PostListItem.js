import { useState } from 'react';
import styled from 'styled-components';

import { Loader } from "../../common/loader";
import { CommentsList } from '../comments/CommentsList';

const PostBody = styled.div`
  padding: 10px 0;  
  color: #fff;
`

const PostItem = styled.div`
  background: #5b9bd5;
  margin: 10px 0;
  padding: 10px;
  width: 100%;
`

const PostTitle = styled.div`
  text-align: center;
  color: #fff;
  font-weight: 500;
  padding: 20px 0;
` 

const PostContainer = styled.div`
  display: flex;
  align-items: center;
`

const ToggleCommentsButton = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "+";
    height: 50px;
    width: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-size: 190px;
    font-family: arial;
    color: #5b9bd5;
  }
`

const MinusToggleCommentsButton = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "-";
    height: 50px;
    width: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-size: 190px;
    font-family: arial;
    color: #5b9bd5;
  }
`

export const PostListItem = ({ post }) => {
  const { title, body, id } = post;

  const [queryUrl, setQueryUrl] = useState('');
  const [showComments, setShowComments] = useState(false);

  let queryBaseUrl = 'https://jsonplaceholder.typicode.com/comments?postId=';

  const handleShowComments = (postId) => {
    setQueryUrl(`${queryBaseUrl}${postId}`);
    setShowComments(prevCheck => !prevCheck)
  }

  return (
    <PostContainer>
      <PostItem>
        <PostTitle>{ title }</PostTitle>

        <PostBody>{ body }</PostBody>

        { showComments && (
          <Loader 
            name="comments"
            url={ queryUrl }>
              <CommentsList></CommentsList>
		      </Loader>
      )}
      </PostItem>


      { showComments 
        ? <MinusToggleCommentsButton showComments={ showComments } onClick={() => handleShowComments(id)}/>
        : <ToggleCommentsButton showComments={ showComments } onClick={() => handleShowComments(id)}/>
      }
    </PostContainer>
  );
}