import { motion } from "framer-motion";

type Props = {
  className?: string;
};

const icon = {
  // hidden: { pathLength: 0, opacity: 0 },
  hidden: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  // visible: {
  //   fill: "url(#a)",
  //   pathLength: 1,
  //   opacity: 1,
  //   type: "spring",
  //   transition: {
  //     duration: 2,
  //     ease: "easeInOut",
  //   },
  // },
  visible: { pathLength: 1, fill: "rgba(255, 255, 255, 1)" },
};

const AndreMeloIcon: React.FC<Props> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 525 77"
      // viewBox="0 0 100 100"
      className={className}
    >
      <motion.path
        // stroke="#fff"
        // strokeWidth={2}
        variants={icon}
        initial="hidden"
        animate="visible"
        // d="M0 100V0150 50 50-50v100L75 751-25 25-25-25z"
        d="M52.224 75a132.97 132.97 0 0 0-2.4-7.104L47.328 60.6h-25.92a331.369 331.369 0 0 1-2.592 7.296c-.832 2.432-1.6 4.8-2.304 7.104H.96a1184.028 1184.028 0 0 1 7.104-19.872 863.393 863.393 0 0 1 6.528-17.184 886.729 886.729 0 0 1 6.336-15.264c2.112-4.864 4.288-9.6 6.528-14.208H41.76a494.726 494.726 0 0 1 6.432 14.208c2.112 4.8 4.224 9.888 6.336 15.264a583.868 583.868 0 0 1 6.624 17.184c2.24 6.08 4.608 12.704 7.104 19.872H52.224ZM34.272 23.544c-.32.96-.8 2.272-1.44 3.936a3169.75 3169.75 0 0 0-2.208 5.76c-.832 2.176-1.76 4.576-2.784 7.2a964.532 964.532 0 0 0-2.976 8.256h18.912A964.532 964.532 0 0 0 40.8 40.44a194.639 194.639 0 0 0-2.784-7.2 3169.75 3169.75 0 0 0-2.208-5.76 334.977 334.977 0 0 0-1.536-3.936Zm41.155 2.688c2.432-.704 5.569-1.344 9.408-1.92 3.84-.64 7.873-.96 12.097-.96 4.287 0 7.839.576 10.655 1.728 2.88 1.088 5.152 2.656 6.816 4.704 1.664 2.048 2.848 4.48 3.552 7.296.705 2.816 1.057 5.952 1.057 9.408V75h-14.305V48.216c0-4.608-.608-7.872-1.824-9.792-1.216-1.92-3.487-2.88-6.816-2.88-1.023 0-2.111.064-3.263.192-1.153.064-2.177.16-3.073.288V75H75.428V26.232Zm68.244 23.136c0 4.416.992 7.968 2.976 10.656 1.984 2.688 4.928 4.032 8.832 4.032 1.28 0 2.464-.032 3.552-.096a44.766 44.766 0 0 0 2.688-.384V37.56c-.896-.576-2.08-1.056-3.552-1.44a16.345 16.345 0 0 0-4.32-.576c-6.784 0-10.176 4.608-10.176 13.824Zm32.352 24c-1.28.384-2.752.768-4.416 1.152-1.664.32-3.424.608-5.28.864a74.354 74.354 0 0 1-5.568.576 52.274 52.274 0 0 1-5.376.288c-4.16 0-7.872-.608-11.136-1.824-3.264-1.216-6.016-2.944-8.256-5.184-2.24-2.304-3.968-5.056-5.184-8.256-1.152-3.264-1.728-6.912-1.728-10.944 0-4.096.512-7.776 1.536-11.04 1.024-3.328 2.496-6.144 4.416-8.448a18.994 18.994 0 0 1 7.008-5.28c2.816-1.216 6.016-1.824 9.6-1.824 1.984 0 3.744.192 5.28.576 1.6.384 3.2.928 4.8 1.632V2.808L176.023.504v72.864Zm43.345-36.192c-1.28-.32-2.784-.64-4.512-.96-1.728-.384-3.584-.576-5.568-.576-.896 0-1.984.096-3.264.288-1.216.128-2.144.288-2.784.48V75h-14.304V27.192c2.56-.896 5.568-1.728 9.024-2.496 3.52-.832 7.424-1.248 11.712-1.248.768 0 1.696.064 2.784.192 1.088.064 2.176.192 3.264.384 1.088.128 2.176.32 3.264.576 1.088.192 2.016.448 2.784.768l-2.4 11.808Zm6.251 12.96c0-4.48.672-8.384 2.016-11.712 1.408-3.392 3.232-6.208 5.472-8.448s4.8-3.936 7.68-5.088c2.944-1.152 5.952-1.728 9.024-1.728 7.168 0 12.832 2.208 16.992 6.624 4.16 4.352 6.24 10.784 6.24 19.296 0 .832-.032 1.76-.096 2.784-.064.96-.128 1.824-.192 2.592h-32.448c.32 2.944 1.696 5.28 4.128 7.008 2.432 1.728 5.696 2.592 9.792 2.592a43.39 43.39 0 0 0 7.68-.672c2.56-.512 4.64-1.12 6.24-1.824l1.92 11.616c-.768.384-1.792.768-3.072 1.152-1.28.384-2.72.704-4.32.96-1.536.32-3.2.576-4.992.768a50.428 50.428 0 0 1-5.376.288c-4.544 0-8.512-.672-11.904-2.016-3.328-1.344-6.112-3.168-8.352-5.472-2.176-2.368-3.808-5.152-4.896-8.352-1.024-3.2-1.536-6.656-1.536-10.368Zm33.6-5.472a13.41 13.41 0 0 0-.672-3.552 7.917 7.917 0 0 0-1.632-3.072c-.704-.896-1.632-1.632-2.784-2.208-1.088-.576-2.464-.864-4.128-.864-1.6 0-2.976.288-4.128.864-1.152.512-2.112 1.216-2.88 2.112-.768.896-1.376 1.952-1.824 3.168a22.123 22.123 0 0 0-.864 3.552h18.912Zm65.589-36.192c1.152 2.112 2.464 4.736 3.936 7.872a221.97 221.97 0 0 1 4.704 10.08 356.58 356.58 0 0 1 4.896 11.04c1.6 3.776 3.104 7.328 4.512 10.656 1.408-3.328 2.912-6.88 4.512-10.656 1.6-3.776 3.2-7.456 4.8-11.04a591.673 591.673 0 0 1 4.704-10.08c1.536-3.136 2.88-5.76 4.032-7.872h13.632c.64 4.416 1.216 9.376 1.728 14.88a418.192 418.192 0 0 1 1.44 17.088c.448 5.888.832 11.808 1.152 17.76.384 5.952.704 11.552.96 16.8h-14.592c-.192-6.464-.448-13.504-.768-21.12a570.51 570.51 0 0 0-1.44-23.04 4140.509 4140.509 0 0 1-3.84 8.928l-4.224 9.792a871.552 871.552 0 0 1-3.936 9.408 947.675 947.675 0 0 0-3.264 7.584h-10.464a947.675 947.675 0 0 0-3.264-7.584c-1.28-3.008-2.624-6.144-4.032-9.408a638.28 638.28 0 0 0-4.128-9.792c-1.408-3.264-2.688-6.24-3.84-8.928a570.51 570.51 0 0 0-1.44 23.04c-.32 7.616-.576 14.656-.768 21.12h-14.592c.256-5.248.544-10.848.864-16.8.384-5.952.768-11.872 1.152-17.76.448-5.952.928-11.648 1.44-17.088.576-5.504 1.184-10.464 1.824-14.88h14.304Zm64.652 41.664c0-4.48.672-8.384 2.016-11.712 1.408-3.392 3.232-6.208 5.472-8.448s4.8-3.936 7.68-5.088c2.944-1.152 5.952-1.728 9.024-1.728 7.168 0 12.832 2.208 16.992 6.624 4.16 4.352 6.24 10.784 6.24 19.296 0 .832-.032 1.76-.096 2.784-.064.96-.128 1.824-.192 2.592h-32.448c.32 2.944 1.696 5.28 4.128 7.008 2.432 1.728 5.696 2.592 9.792 2.592a43.39 43.39 0 0 0 7.68-.672c2.56-.512 4.64-1.12 6.24-1.824l1.92 11.616c-.768.384-1.792.768-3.072 1.152-1.28.384-2.72.704-4.32.96-1.536.32-3.2.576-4.992.768a50.428 50.428 0 0 1-5.376.288c-4.544 0-8.512-.672-11.904-2.016-3.328-1.344-6.112-3.168-8.352-5.472-2.176-2.368-3.808-5.152-4.896-8.352-1.024-3.2-1.536-6.656-1.536-10.368Zm33.6-5.472a13.41 13.41 0 0 0-.672-3.552 7.917 7.917 0 0 0-1.632-3.072c-.704-.896-1.632-1.632-2.784-2.208-1.088-.576-2.464-.864-4.128-.864-1.6 0-2.976.288-4.128.864-1.152.512-2.112 1.216-2.88 2.112-.768.896-1.376 1.952-1.824 3.168a22.123 22.123 0 0 0-.864 3.552h18.912Zm44.543 31.296c-4.16-.064-7.552-.512-10.176-1.344-2.56-.832-4.608-1.984-6.144-3.456-1.472-1.536-2.496-3.36-3.072-5.472-.512-2.176-.768-4.608-.768-7.296V2.808L461.747.504v55.008c0 1.28.096 2.432.288 3.456.192 1.024.544 1.888 1.056 2.592.576.704 1.376 1.28 2.4 1.728 1.024.448 2.4.736 4.128.864l-2.016 11.808Zm56.966-26.304c0 3.968-.576 7.616-1.728 10.944-1.152 3.264-2.816 6.08-4.992 8.448-2.176 2.304-4.8 4.096-7.872 5.376-3.008 1.28-6.4 1.92-10.176 1.92-3.712 0-7.104-.64-10.176-1.92-3.008-1.28-5.6-3.072-7.776-5.376-2.176-2.368-3.872-5.184-5.088-8.448-1.216-3.328-1.824-6.976-1.824-10.944 0-3.968.608-7.584 1.824-10.848 1.28-3.264 3.008-6.048 5.184-8.352a23.927 23.927 0 0 1 7.872-5.376c3.072-1.28 6.4-1.92 9.984-1.92 3.648 0 6.976.64 9.984 1.92 3.072 1.28 5.696 3.072 7.872 5.376 2.176 2.304 3.872 5.088 5.088 8.352 1.216 3.264 1.824 6.88 1.824 10.848Zm-14.592 0c0-4.416-.896-7.872-2.688-10.368-1.728-2.56-4.224-3.84-7.488-3.84-3.264 0-5.792 1.28-7.584 3.84-1.792 2.496-2.688 5.952-2.688 10.368s.896 7.936 2.688 10.56c1.792 2.56 4.32 3.84 7.584 3.84 3.264 0 5.76-1.28 7.488-3.84 1.792-2.624 2.688-6.144 2.688-10.56Z"
      />
      {/* <defs>
        <linearGradient
          id="a"
          x1="-39.478"
          x2="611.792"
          y1="78.286"
          y2="-8.974"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#fcb045" />
          <stop offset="15%" stopColor="rgba(146, 73, 221, 1)" />
          <stop offset="43.6%" stopColor="rgba(176, 60, 196, 1)" />
          <stop offset="65.4%" stopColor="rgba(192, 55, 173, 1)" />
          <stop offset="55%" stopColor="rgba(217, 46, 116, 1)" />
        </linearGradient>
      </defs> */}
    </svg>
  );
};

export default AndreMeloIcon;