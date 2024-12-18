import { Avatar } from "../Elements/Avatar";

interface OnlineUser {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

interface OnlineUsersProps {
  users: OnlineUser[];
}

export function OnlineUsers({ users }: OnlineUsersProps) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Online</h2>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {users.map((user) => (
          <div key={user.id} className="flex flex-col items-center min-w-[64px]">
            <Avatar src={user.avatar} alt={user.name} size="sm" />
            <span className="text-xs text-gray-600 mt-1">{user.name}</span>
            <span className="text-xs text-gray-400">{user.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

