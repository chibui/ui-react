import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Spinner } from '../../components/Spinner';

const ColumnListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoadMoreButton = styled.div`
  border: 1px solid black;
  color: ${props => (props.notNested ? '#fff' : '#000')};
  width: 100px;
  float: right;
  margin: 12px;
  text-align: center;
  padding: 4px;
  align-self: end;
  background: ${props => (props.notNested ? '#5b9bd5' : '#fff')};
  margin-right: ${props => (props.notNested ? '90px' : '12px')};
`

export const ColList = ({
  items,
  notNested,
  resource,
  component: ItemComponent,
}) => {
  const [showButton, setShowButton] = useState(true);
  const [listToRender, setListToRender] = useState([]);
  const [remainingList, setRemainingList] = useState([]);

  console.log('props.notNested', notNested);
  
  const handleButton = () => {
    setListToRender([...listToRender, ...remainingList]);
    setShowButton(false);
  }
  
  useEffect(() => {
    if (items.length) {
      setListToRender(items.slice(0,3));
      setRemainingList(items.slice(3));
    }
  }, [items]);

  return items ? ( 
    <ColumnListContainer>
      {listToRender.map((item) => (
        <ItemComponent key={ item.id } {...{ [resource]:item}} />
      ))}

      { showButton && (
        <LoadMoreButton notNested={ notNested } onClick={() => handleButton()}>...Load all</LoadMoreButton>
      )}
    </ColumnListContainer>
  ) : <Spinner/>
};