interface User {
  name: string;
  age: number;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return <div>(user.name) - Age: {user.age}</div>;
};

export default UserCard;