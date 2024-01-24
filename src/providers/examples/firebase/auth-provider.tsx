/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-console */

'use client';

import auth from '@/firebase/client';
import {
  User,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

import Cookies from 'js-cookie';

export function getAuthToken(): string | undefined {
  return Cookies.get('firebaseIdToken');
}

export function setAuthToken(token: string): string | undefined {
  return Cookies.set('firebaseIdToken', token, { secure: true });
}

export function removeAuthToken(): void {
  return Cookies.remove('firebaseIdToken');
}

type AuthContextType = {
  currentUser: User | null;
  isAdmin: boolean;
  isPro: boolean;
  loginGoogle: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isPro, setIsPro] = useState<boolean>(false);

  useEffect(() => {
    if (!auth) return;

    return auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setCurrentUser(null);
        setIsAdmin(false);
        setIsPro(false);
        removeAuthToken();
      }
      if (user) {
        const token = await user.getIdToken();
        setAuthToken(token);
        setCurrentUser(user);
        const tokenValues = await user.getIdTokenResult();
        setIsAdmin(tokenValues.claims.role === 'admin');
        const userResponse = await fetch(`/api/firebase/users/${user.uid}`, {
          cache: 'no-store'
        });
        if (userResponse.ok) {
          const userJson = await userResponse.json();
          if (userJson?.isPro) setIsPro(true);
        } else {
          console.error('Could not get user info');
        }
      }
    });
  }, []);

  function loginGoogle(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!auth) {
        reject();
        return;
      }
      signInWithPopup(auth, new GoogleAuthProvider())
        // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
        .then((_user) => {
          console.log('Signed in!');
          resolve();
        })
        .catch(() => {
          console.error('Something went wrong');
          reject();
        });
    });
  }

  function logout(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!auth) {
        reject();
        return;
      }
      auth
        .signOut()
        .then(() => {
          console.log('Signed out');
          resolve();
        })
        .catch(() => {
          console.error('Something went wrong');
          reject();
        });
    });
  }
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAdmin,
        isPro,
        loginGoogle,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
