/**
 * Fetch firestore data
 */
export async function fetchCollectionDocuments(collectionReference) {
  try {
    const data = await collectionReference.get();
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function isExists(reference) {
  try {
    const data = await reference.get();
    return data.exists;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function fetchDocument(reference) {
  try {
    const docRef = await reference.get();
    return docRef.data();
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function setData(reference, data, converter) {
  try {
    if (converter) return await reference.withConverter(converter).set(data);
    return await reference.set(data);
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function addData(reference, data) {
  try {
    const documentRef = await reference.add(data);
    console.log(documentRef);
    return documentRef.id;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function updateData(reference, data, converter) {
  try {
    if (converter) return await reference.withConverter(converter).set(data);
    return await reference.update(data);
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function deleteData(reference, id) {
  try {
    return await reference.doc(id).delete();
  } catch (err) {
    console.error(err);
    return err;
  }
}

export function fetchLiveDocument(reference, onSuccessListener, onFailureListener) {
  return reference.onSnapshot(onSuccessListener, onFailureListener);
}

export async function store(reference, data) {
  try {
    await reference.put(data);
    return await reference.getDownloadURL();
  } catch (err) {
    console.error(err);
    return err;
  }
}
