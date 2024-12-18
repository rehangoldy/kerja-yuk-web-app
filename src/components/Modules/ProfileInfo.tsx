import { Avatar } from "../Elements/Avatar";

interface ProfileInfoProps {
  name: string;
  role: string;
  location: string;
  memberSince: string;
  avatarUrl: string;
}

export function ProfileInfo({ name, role, location, memberSince, avatarUrl }: ProfileInfoProps) {
  return (
    <div className="flex items-start gap-4 bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-4 text-white">
      <Avatar src={avatarUrl} alt={name} size="lg" />
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="font-semibold text-lg">{name}</h2>
            <p className="text-sm opacity-90">{role}</p>
          </div>
          <div className="text-right">
            <p className="text-xs opacity-75">Member since</p>
            <p className="text-sm">{memberSince}</p>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-sm">
            <span className="opacity-75">Location</span>
            <br />
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}

