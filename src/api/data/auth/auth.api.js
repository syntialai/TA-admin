import firebase from 'firebase/app';
import { db, auth } from '@/plugins/firebase';
import { TEACHER_CREDENTIAL_COLLECTION } from '@/api/collections';
import { isExists } from '@/api/data/api';

const credentialsCollection = db.collection(TEACHER_CREDENTIAL_COLLECTION);

const getProvider = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  return provider;
};

export const getUserAuth = () => new Promise((resolve, reject) => {
  const unsubscribe = auth.onAuthStateChanged((userAuth) => {
    unsubscribe();
    resolve(userAuth);
  }, reject);
});

export const isCredentialExists = async (credential) => {
  const exists = await isExists(credentialsCollection.doc(credential));
  return exists;
};

export const signInWithGoogle = async () => {
  const result = await auth.signInWithPopup(getProvider());
  console.log(result.user);
  return result.user;
};

export const signOut = () => auth.signOut();
