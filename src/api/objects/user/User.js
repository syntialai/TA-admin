import UserRole from './UserRole';

class User {
  constructor(id, name, email, photo, role, bio, totalCourseCreated) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.photo = photo;
    this.role = role;
    this.bio = bio;
    this.totalCourseCreated = totalCourseCreated;
  }
}

const userConverter = {
  toFirestore(user) {
    return {
      name: user.name,
      email: user.email,
      photo: user.photo,
      role: user.role || UserRole.ROLE_TEACHER,
      bio: user.bio || '',
      totalCourseCreated: user.totalCourseCreated || 0,
    };
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);
    return new User(
      snapshot.id,
      data.name,
      data.email,
      data.photo,
      UserRole[data.role],
      data.bio,
      data.totalCourseCreated || 0,
    );
  },
};

const userFields = {
  role: 'role',
};

export {
  User,
  userConverter,
  userFields,
};
