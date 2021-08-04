import { db } from '@/plugins/firebase';
import { TEACHER_CREDENTIAL_COLLECTION } from '@/api/collections';
import { fetchCollectionDocuments, addData, deleteData } from '@/api/data/api';
import { credentialConverter, credentialFields } from '@/api/objects/credentials/Credentials';

const credentialsCollection = db.collection(TEACHER_CREDENTIAL_COLLECTION);

export const addCredentials = async (credential) => {
  const credentialId = await addData(
    credentialsCollection.withConverter(credentialConverter),
    credential,
  );
  return credentialId;
};

export const deleteCredentials = async (credentialId) => {
  const deleted = await deleteData(
    credentialsCollection,
    credentialId,
  );
  return deleted;
};

export const getCredentials = async () => {
  const snapshots = await fetchCollectionDocuments(
    credentialsCollection
      .orderBy(credentialFields.createdAt)
      .withConverter(credentialConverter),
  );
  return snapshots.docs.map((doc) => doc.data());
};
