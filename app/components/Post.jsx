import DeletePost from "./DeletePost"

const Post = ({id,title,content,authorName}) => {
  return (
    <div className='border-[1px] border-red p-4 w-96'>
        <h3>{authorName}</h3>
        <h4>{title}</h4>
        <p>{content}</p>
        <DeletePost postId={id}/>
    </div>
  )
}

export default Post
