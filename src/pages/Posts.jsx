import React, { useEffect, useState } from "react";
import '../../src/styles/App.css'
import PostsService from "../API/PostsService";
import { getPageCount } from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostsService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })
    useEffect(() => {
        fetchPosts()
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (<div className="App">
        <button onClick={fetchPosts}>GET POSTS</button>
        <MyButton style={{ margin: '20px 0 0 0' }} onClick={() => setModal(true)}>
            Создать пост
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost} />
        </MyModal>
        <hr style={{ margin: "15px 0" }} />
        <PostFilter filter={filter} setFilter={setFilter} />
        {postError && <h1>Произошла ошибка ${postError}</h1>}
        {isPostsLoading ?
            <div style={{ display: "flex", justifyContent: "center", margin: "50px 0 0 0" }}><Loader /></div> :
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1" />
        }
        <Pagination page={page} changePage={changePage} totalPages={totalPages}></Pagination>


    </div>);
}

export default Posts;
