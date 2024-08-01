import { queryOptions, useQuery } from "@tanstack/react-query";

export const getPosts = queryOptions({
    queryKey: ["posts"],
    queryFn: async (): Promise<Post[]> => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        return res.json();
    },
});
