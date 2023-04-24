import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostsService from "../API/PostsService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {

        const response = await PostsService.getById(params.id)
        setPost(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        console.log(params.id)
    }, [])
    return (
        <div>
            <h1>Вы открыли страницу поста id = {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}.{post.title}</div>
            }

        </div>
    );
};

export default PostIdPage;