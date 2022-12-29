import Image from 'next/image';

export const Avatar = () => {
  return (
    <div className="w-full h-full relative">
      <Image
        fill
        className="rounded-full border-4 border-white"
        src="/images/avatar.jpg"
        alt="User Avatar"
      />
    </div>
  );
};
