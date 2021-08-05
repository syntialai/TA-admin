import { auth } from '@/plugins/firebase';

export const getUserAuth = () => new Promise((resolve, reject) => {
  const unsubscribe = auth.onAuthStateChanged((userAuth) => {
    unsubscribe();
    resolve(userAuth);
  }, reject);
});

export const signInWithEmailAndPassword = async (email, password) => {
  const result = await auth.signInWithEmailAndPassword(email, password);
  return result.user;
};

export const signOut = async () => auth.signOut();
