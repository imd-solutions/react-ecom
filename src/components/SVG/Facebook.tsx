export default function Facebook(props: { width: number; height: number }) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill="#5475E5" />
      <g clipPath="url(#clip0)">
        <path
          d="M33.0064 17H16.9928C16.4444 17.0003 15.9999 17.4451 16 17.9936V34.0072C16.0003 34.5556 16.4451 35.0001 16.9936 35H33.0064C33.5551 35.0001 33.9999 34.5555 34 34.0068C34 34.0067 34 34.0066 34 34.0064V17.9928C33.9997 17.4444 33.5549 16.9999 33.0064 17Z"
          fill="white"
        />
        <path
          d="M28.4277 35.0003V28.0394H30.7744L31.126 25.3148H28.4277V23.5795C28.4277 22.7924 28.6462 22.2562 29.7748 22.2562H31.2051V19.8259C30.9562 19.7928 30.1025 19.7188 29.109 19.7188C27.0348 19.7188 25.6152 20.9844 25.6152 23.3096V25.3148H23.2773V28.0394H25.6152V35.0003H28.4277Z"
          fill="#5475E5"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(16 17)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
