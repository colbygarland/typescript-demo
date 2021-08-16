import { User } from './2-defining-own-types';

const user: User = {
  // TODO
};

interface UserProps {
  name: string;
  age: number;
  hobbies: string[];
}

function UserInfo({ name, age, hobbies }: UserProps) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <ul>
        {hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

<UserInfo />;

// Satisfy TS
export {};
