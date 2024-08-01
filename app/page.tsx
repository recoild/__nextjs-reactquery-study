import PostList from "@/biz/components/post-list";
import { getQueryClient } from "@/biz/providers/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Image from "next/image";

export default function Home() {
    const queryClient = getQueryClient();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <HydrationBoundary state={dehydrate(queryClient)}>
                <PostList />
            </HydrationBoundary>
        </main>
    );
}
