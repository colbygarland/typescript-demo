interface User {
  name: string;
}
interface AdminUser {
  name: string;
  admin: boolean;
}

const user: User = {
  name: 'Colby',
};
const admin: AdminUser = {
  name: 'Colby',
  admin: true,
};

function print<T>(arg: T): T {
  console.log(arg);
  return arg;
}

print<User>(user);
print<AdminUser>(admin);

// Satisfy TS
export {};
