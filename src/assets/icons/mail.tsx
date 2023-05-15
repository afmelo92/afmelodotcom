type Props = {
  className?: string;
};

const MailIcon: React.FC<Props> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="inherit"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        stroke="inherit"
        strokeLinejoin="round"
        strokeWidth="current"
        d="M3 8c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 5 5.068 5 6 5h12c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C21 6.602 21 7.068 21 8v8c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 19 18.932 19 18 19H6c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C3 17.398 3 16.932 3 16V8Z"
      />
      <path
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
        d="m4 6 6.683 5.848a2 2 0 0 0 2.634 0L20 6"
      />
    </svg>
  );
};

export default MailIcon;
