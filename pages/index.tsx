import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { Avatar } from "@material-ui/core";

export default function Index() {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          <Avatar alt="Remy Sharp" src={session.user.image} />
          Signed in as {session.user.email} <br />
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </>
  );
}
