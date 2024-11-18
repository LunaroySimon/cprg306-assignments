"use client";

import Link from 'next/link';
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const login = async () => {
    await gitHubSignIn();
  };

  const logout = async () => {
    await firebaseSignOut();
  };

  return (
    <main>
      <div>
        {user ? (
          <div>
            <h1 className="text-2xl m-5">Welcome, {user.displayName}!</h1>
            <p className="ml-5">Email Address: {user.email}</p>
            <p className="ml-5 text-green-500"><Link href="/week-9/shopping-list">View your shopping list!</Link></p>
            <br/>
            <button onClick={logout} className="ml-5">Logout</button>
          </div>
        ) : (
          <button onClick={login} className="m-5 text-blue-400">Login with GitHub</button>
        )}
      </div>
    </main>
  );
}