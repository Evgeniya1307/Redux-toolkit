import React from 'react'
import { deletePostById } from './features/user/post/postSlice'
import { useDispatch } from 'react-redux'

const PostItem = ({post}) => {
   //создаю сам диспатч
   const dispatch=useDispatch()
    return (
        <div 
        //на сам пост вешаю событие 
        onClick={()=>dispatch(deletePostById(post.id)) }//(deletePostById) } экшин сам
        className='flex w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4'>
           {post.title} 
        </div>
    )
}

export default PostItem;
