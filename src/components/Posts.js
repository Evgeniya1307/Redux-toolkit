import React from "react";
import PostItem from "./PostItem";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./features/user/post/postSlice";

const Posts = () => {
  //создаю обьект диспатча
  const dispatch = useDispatch(); //при клике на данную кнопочку можем вызывать функц,getposts её тут импортируем
  //через хук useSelector достаю массив posts
  const posts = useSelector((state) => state.post.posts) //это беру в stor он является моим стейтом и там post а у postSlice усть масив posts
  return (
    <div>
      <button
        type="submit"
        className="bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm"
        //теперь на клике на кнопку вызывать могу диспатч а в экшене getPosts
        onClick={() => dispatch(getPosts())}
      >
        Get posts
      </button>
      {posts?.map((post) => (
        <PostItem key={post.title} post={post} /> //если в постс чтото есть то тогда map получем пост и получаем postitem где есть кеу {post.title} и передаю сам пост как пост
      ))}
    </div>
  );
};

export default Posts;
