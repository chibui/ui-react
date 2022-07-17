import styled from 'styled-components';

const CommentBody = styled.div`
  padding-top: 20px;
`

const CommentContainer = styled.div`
  background: #fff;
  margin: 12px;
  padding: 20px;
`
const CommentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: green;
`
export const CommentsListItem = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <CommentContainer>
      <CommentTitle>
        <div>{ name }</div>
        <div>{ email }</div>
      </CommentTitle> 

      <CommentBody>{ body }</CommentBody>
    </CommentContainer>
  );
}