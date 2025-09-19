type Props = {
  id: string;
  title: string;
  leftIcon: React.ReactNode;
  className: string;
  // containerClass: string;
};

export default function Button({ id, title, leftIcon, className }: Props) {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${className}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
    </button>
  );
}
