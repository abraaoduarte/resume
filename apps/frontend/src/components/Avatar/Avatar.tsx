import Image from 'next/image';

export const Avatar = () => {
  return (
    <div className="w-44 relative mt-20 h-44">
      <Image
        fill
        className="rounded-full border-4 border-white"
        src="/images/avatar.jpg"
        alt="User Avatar"
      />
    </div>
  );
};
