import { nowTimestamp } from '@/utils/object-utils';

class Credentials {
  constructor(id, createdAt) {
    this.id = id;
    this.createdAt = createdAt;
  }
}

const credentialConverter = {
  toFirestore(credential) {
    return {
      createdAt: credential.createdAt || nowTimestamp(),
    };
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);
    return new Credentials(
      snapshot.id,
      data.createdAt || nowTimestamp(),
    );
  },
};

const credentialFields = {
  createdAt: 'createdAt',
};

export {
  Credentials,
  credentialConverter,
  credentialFields,
};
