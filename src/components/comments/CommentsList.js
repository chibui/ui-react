import { ColList } from '../../common/lists/ColList';
import { CommentsListItem } from './CommentsListItem';
import { Spinner } from '../Spinner';

export const CommentsList = (props) => {
  const items = props.comments;
  
	return items.length ?(
		<ColList
      component={ CommentsListItem }
      items={ items }
      resource='comment'
    />
	) : <Spinner/>;
}