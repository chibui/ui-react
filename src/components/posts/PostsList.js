import { ColList } from '../../common/lists/ColList';
import { PostListItem } from './PostListItem';
import { Spinner } from '../Spinner';

export const PostsList = (props) => {
  const items = props.posts;
  
	return items.length ?(
		<ColList
      component={ PostListItem }
      items={ items }
      notNested={ true }
      resource='post'/>
	) : <Spinner/>;
}