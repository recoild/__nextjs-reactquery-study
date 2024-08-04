import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { FC } from "react";
import Login from "./login";
import Logout from "./logout";

interface ProfileInfoProps {}

const ProfileInfo: FC<ProfileInfoProps> = async ({}) => {
    const session = await getServerSession(authOptions);
    if (session) {
        return (
            <div>
                <div>Your name is {session.user?.name}</div>
                <Logout />
            </div>
        );
    }
    return (
        <div>
            <h1>로그인 필요데스네</h1>
            <Login />
        </div>
    );
};

export default ProfileInfo;
