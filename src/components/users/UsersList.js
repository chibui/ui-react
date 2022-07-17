import { RowList } from '../../common/lists/RowList';
import { UserFirstNameListItem } from './UserFirstNameListItem';
import { Spinner } from '../Spinner';

export const UsersList = ({users, active, setActive}) => {  
	return users.length ?(
    <RowList
      active={ active }
      component={ UserFirstNameListItem }
      items={ users }
      resource='user'
      setActive={ setActive }

    />
	) : <Spinner/>;
}