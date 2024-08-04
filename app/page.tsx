import { getPosts } from "@/biz/api/postApi";
import PostList from "@/biz/components/post-list";
import ProfileInfo from "@/biz/components/profile-info";
import { getQueryClient } from "@/biz/providers/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Image from "next/image";

export default function Home() {
    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(getPosts);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <HydrationBoundary state={dehydrate(queryClient)}>
                <ProfileInfo />
                <PostList />
            </HydrationBoundary>
        </main>
    );
}
