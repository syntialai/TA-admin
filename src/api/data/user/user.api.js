import { db } from '@/plugins/firebase';
import { userConverter, userFields } from '@/api/objects/user/User';
import UserRole from '@/api/objects/user/UserRole';
import { USER_COLLECTION } from '@/api/collections';
import { fetchCollectionDocuments, updateData } from '@/api/data/api';

const usersCollection = db.collection(USER_COLLECTION);

const getStudentsData = async () => {
  const docRef = usersCollection
    .where(userFields.role, '==', UserRole.ROLE_STUDENT)
    .withConverter(userConverter);
  const snapshots = await fetchCollectionDocuments(docRef);
  return snapshots.docs.map((doc) => doc.data());
};

const getTeachersData = async () => {
  const docRef = usersCollection
    .where(userFields.role, '==', UserRole.ROLE_TEACHER)
    .withConverter(userConverter);
  const snapshots = await fetchCollectionDocuments(docRef);
  return snapshots.docs.map((doc) => doc.data());
};

const updateUser = async (id, user) => {
  const docRef = await updateData(usersCollection.doc(id), user);
  return docRef;
};

export {
  getStudentsData,
  getTeachersData,
  updateUser,
};
