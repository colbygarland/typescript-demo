interface User {
  name: string;
  email: string;
  avatar?: string;
}

interface AuthenticatedUser extends User {
  password: string;
}

interface AdminUser extends User {
  admin: boolean;
}

const user: User = {
  // TODO
};

const authUser: AuthenticatedUser = {
  // TODO
};

const admin: AdminUser = {
  // TODO
};

// Satisfy TS
export {};
