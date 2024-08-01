"use client";

import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getPosts } from "../api/postApi";

const PostList = () => {
    const { data, isPending, isFetching } = useSuspenseQuery(getPosts);

    return (
        <div>
            <h1>Posts</h1>
            <hr></hr>
            <ul>
                {data?.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
