interface User {
    name: string;
    age: number;
}

interface UserCardProps {
    user: User;
}
const UserCard = ({ user }: UserCardProps) => {
    return <div>{user.name} - {user.age} años</div>;
};

export default UserCard;

