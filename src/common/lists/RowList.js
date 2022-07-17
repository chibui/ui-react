import styled from 'styled-components';

const RowListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const RowList = ({
  active,
  component: ItemComponent,
  items,
  resource,
  setActive,
}) => {
 
  return ( 
    <RowListContainer>
      {items.map((item, i) => (
        <ItemComponent 
          active={active} 
          key={item.id} 
          setActive={setActive} 
          {...{ [resource]:item }} />
      ))}
    </RowListContainer>
  )
};