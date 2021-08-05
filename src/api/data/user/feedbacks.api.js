import { db } from '@/plugins/firebase';
import { userConverter, userFields } from '@/api/objects/user/User';
import { feedbackConverter } from '@/api/objects/user/Feedback';
import UserRole from '@/api/objects/user/UserRole';
import { USER_COLLECTION, FEEDBACK_COLLECTION } from '@/api/collections';
import { fetchCollectionDocuments } from '@/api/data/api';

const usersCollection = db.collection(USER_COLLECTION);
const feedbacksCollection = (userId) => db.collection(USER_COLLECTION)
  .doc(userId)
  .collection(FEEDBACK_COLLECTION);

const getFeedbacks = async () => {
  const docRef = usersCollection
    .where(userFields.role, '==', UserRole.ROLE_STUDENT)
    .withConverter(userConverter);

  const snapshots = await fetchCollectionDocuments(docRef);
  const promises = [];
  snapshots.docs.forEach((user) => {
    promises.push(fetchCollectionDocuments(feedbacksCollection(user.id)
      .withConverter(feedbackConverter)));
  });
  const promisesResult = await Promise.all(promises);
  const result = [];
  promisesResult.forEach((feedbackSnapshots) => {
    result.push(...feedbackSnapshots.docs.map((doc) => doc.data()));
  });

  return result;
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getFeedbacks,
};
