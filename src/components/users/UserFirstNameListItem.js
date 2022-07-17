import { useEffect, useState } from 'react';
import styled from 'styled-components';

const UserItem = styled.div`
  border: 1px solid #41719c;
  background-color: ${props => (props.isActive ? '#ed7d31' : '#5b9bd5')};
  color: #fff;
  padding: 4px 22px;
  margin: auto 2px;
`
export const UserFirstNameListItem = ({active, user, setActive}) => {
  const firstName = user.name.split(' ')[0];
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(active.id === user.id)
  }, [active, user]);

  return (
    <UserItem isActive={ isActive } onClick={() => setActive(user)}>{ firstName }</UserItem>
  );
}