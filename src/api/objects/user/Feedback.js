import { nowTimestamp } from '@/utils/object-utils';

class Feedbacks {
  constructor(id, description, feedbackType, createdAt) {
    this.id = id;
    this.description = description;
    this.feedbackType = feedbackType;
    this.createdAt = createdAt;
  }
}

const feedbackConverter = {
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);
    return new Feedbacks(
      snapshot.id,
      data.description,
      data.feedbackType,
      data.createdAt || nowTimestamp(),
    );
  },
};

export {
  Feedbacks,
  feedbackConverter,
};
