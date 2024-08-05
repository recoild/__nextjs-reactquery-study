"use client";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
export default function Logout() {
    return <Button onClick={() => signOut()}>Signout of keycloak</Button>;
}
