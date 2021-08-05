import UserRole from './UserRole';

class User {
  constructor(id, name, email, role, deactivated) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
    this.deactivated = deactivated;
  }
}

const userConverter = {
  toFirestore(user) {
    return {
      name: user.name,
      email: user.email,
      role: user.role || UserRole.ROLE_TEACHER,
      deactivated: user.deactivated,
    };
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);
    return new User(
      snapshot.id,
      data.name,
      data.email,
      UserRole[data.role],
      data.deactivated || false,
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
