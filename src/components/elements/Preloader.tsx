import { motion } from "framer-motion";
import * as React from "react";


interface PreloaderProps {
  setIsPreloaderDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Preloader: React.FunctionComponent<PreloaderProps> = ({
  setIsPreloaderDisplayed,
}) => {
  const containerVariants = {
    final: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        staggerDirection: -1,
      },
    },
    initial: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const firstLetterVariants = {
    final: {
      y: 0,
      x: '40%',
      rotate: 0,
      opacity: 1,
      fill: '#ffffff',
      transition: {
        duration: 1,
        type: 'spring',
        delay: 1,
      },
    },
    initial: {
      y: 0,
      rotate: 0,
      opacity: 1,
      fill: '#ffffff',
      transition: {
        duration: 1,
        type: 'spring',
        delay: 1,
      },
    },
  };

  const firstLetterDotVariants = {
    ...firstLetterVariants,
    final: {
      ...firstLetterVariants.final,
      fill: '#CC00C1',
    },
    initial: {
      ...firstLetterVariants.initial,
      fill: '#47009E',
    },
  };

  const otherLetterVariants = {
    final: {
      y: '200%',
      rotate: 270,
      opacity: 0,
      fill: 'white',
      transition: {
        duration: 1.5,
        type: 'spring',
      },
    },
    initial: {
      y: 0,
      rotate: 0,
      opacity: 1,
      fill: 'white',
      transition: {
        duration: 1.5,
        type: 'spring',
      },
    },
  };

  return (
    <motion.div
      key={'preloader-container'}
      className="fixed top-0 left-0 z-10 flex h-screen w-screen justify-center bg-magenta-violet-400 pt-72 md:pt-96"
      initial="initial"
      animate="final"
      exit="exit"
      variants={containerVariants}
      onAnimationComplete={() => setIsPreloaderDisplayed(false)}
    >
      <svg
        width={250}
        height={63}
        viewBox="0 0 250 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M38.5038 21.0501C38.266 19.8144 37.6843 18.7919 36.757 17.9844C35.8302 17.1763 34.7246 16.7722 33.4414 16.7722C32.1106 16.7722 30.958 17.2238 29.9832 18.1265C29.0088 19.0298 28.4741 20.1468 28.379 21.4776V43.3677H19.2519V21.763C19.2044 20.3847 18.6931 19.208 17.7188 18.2332C16.7445 17.2588 15.5679 16.7717 14.1895 16.7717C12.9062 16.7717 11.7887 17.1757 10.8379 17.9838C9.88758 18.7919 9.31677 19.8138 9.1265 21.0495V43.3677H0V21.763C0 19.8138 0.379997 17.9838 1.14109 16.2725C1.90108 14.5611 2.92352 13.0761 4.20676 11.8164C5.49 10.5567 6.98758 9.55828 8.69893 8.8218C10.4097 8.08477 12.2403 7.7168 14.1895 7.7168C16.0435 7.7168 17.7904 8.06126 19.4302 8.75072C21.0699 9.44018 22.5314 10.379 23.8152 11.5671C25.0514 10.379 26.5008 9.43963 28.1652 8.75072C29.829 8.06126 31.5873 7.7168 33.4414 7.7168C35.3906 7.7168 37.2201 8.08531 38.9314 8.8218C40.6428 9.55883 42.1403 10.5567 43.4236 11.8164C44.7068 13.0761 45.7287 14.5617 46.4893 16.2725C47.2503 17.9838 47.6303 19.8138 47.6303 21.763V43.3677H42.2918H38.5033V43.3638H47.6292V26.6817H38.5033V21.0495L38.5038 21.0501Z"
          variants={firstLetterVariants}
        />
        <motion.path
          d="M47.6301 30.6863H38.4102V43.3645H47.6301V30.6863Z"
          variants={firstLetterDotVariants}
        />
        <motion.path
          d="M65.3865 8.89746C70.9246 8.89746 74.0023 10.1599 76.9144 12.6816C79.8258 15.2043 81.5285 18.7856 81.5705 23.994L81.7253 43.3039H71.5036L71.5392 38.4957C69.8573 41.7369 66.5751 43.357 61.6931 43.357C59.1092 43.357 56.8729 42.9053 54.986 42.0032C53.0986 41.1005 51.6732 39.8801 50.7093 38.3421C49.7454 36.8035 49.2637 35.05 49.2637 33.0806C49.2637 29.922 50.4737 27.4703 52.8942 25.7273C55.3141 23.9842 59.0479 23.1121 64.0934 23.1121H72.5004C72.2953 19.5839 68.1755 17.82 63.6631 17.82C62.0633 17.82 60.4427 18.0765 58.8019 18.5893C57.1605 19.1022 55.7657 19.8097 54.617 20.7124L50.6792 12.7745C52.5251 11.5438 54.7712 10.5902 57.4175 9.91334C60.0632 9.23645 62.72 8.89801 65.3865 8.89801V8.89746ZM64.9556 35.973C66.3094 35.973 67.4992 35.6444 68.5249 34.9883C69.5501 34.3321 70.2887 33.3677 70.7404 32.0965V29.2041H65.6943C62.2891 29.2041 60.5865 30.3326 60.5865 32.5885C60.5865 33.6143 60.9763 34.4344 61.756 35.05C62.5351 35.6651 63.6019 35.973 64.9556 35.973Z"
          variants={otherLetterVariants}
        />
        <motion.path
          d="M91.3855 51.4095C95.864 53.2838 102.413 55.4856 106.51 52.4789C110.1 49.8441 109.535 45.2109 109.535 41.2704C106.873 42.7439 103.973 43.4809 100.836 43.4809C98.3643 43.4809 96.0471 43.0173 93.8841 42.0905C91.7212 41.1638 89.8321 39.892 88.2159 38.2758C86.5997 36.6596 85.3279 34.77 84.4012 32.6075C83.4738 30.4446 83.0107 28.1269 83.0107 25.6555C83.0107 23.1836 83.4744 20.8664 84.4012 18.7035C85.3279 16.541 86.5997 14.6514 88.2159 13.0352C89.8321 11.419 91.7217 10.1478 93.8841 9.22049C96.0471 8.29318 98.3648 7.83008 100.836 7.83008C103.308 7.83008 105.625 8.29373 107.788 9.22049C109.951 10.1478 111.84 11.419 113.456 13.0352C115.073 14.6514 116.344 16.541 117.271 18.7035C118.198 20.8664 118.662 23.1842 118.662 25.6555V43.4815C118.662 62.1686 104.058 66.6591 87.9201 59.1757L91.3849 51.4106L91.3855 51.4095ZM100.836 34.3539C101.977 34.3539 103.07 34.1401 104.116 33.712C105.162 33.2839 106.077 32.6896 106.861 31.9296C107.646 31.169 108.275 30.2778 108.751 29.2559C109.226 28.234 109.488 27.1525 109.536 26.0114V25.655C109.536 24.4669 109.31 23.3378 108.858 22.2683C108.407 21.1989 107.789 20.2716 107.004 19.4875C106.22 18.7029 105.293 18.0851 104.223 17.6335C103.154 17.1818 102.025 16.956 100.837 16.956C99.6486 16.956 98.519 17.1818 97.4496 17.6335C96.3801 18.0851 95.4533 18.7029 94.6687 19.4875C93.8841 20.2721 93.2663 21.1989 92.8147 22.2683C92.3631 23.3378 92.1372 24.4669 92.1372 25.655C92.1372 26.8431 92.3631 27.9727 92.8147 29.0416C93.2663 30.111 93.8841 31.0383 94.6687 31.8224C95.4533 32.607 96.3801 33.2248 97.4496 33.6765C98.519 34.1281 99.6481 34.3539 100.837 34.3539H100.836Z"
          variants={otherLetterVariants}
        />
        <motion.path
          d="M131.531 30.4335L155.212 27.3504C155.314 26.0485 155.274 24.697 155.091 23.2962C153.779 13.2232 145.594 6.62329 135.854 7.89123C125.315 9.26359 119.109 17.8734 120.403 27.8124C121.697 37.7519 129.767 44.5027 141.174 43.0177C147.511 42.1927 152.143 39.215 154.822 34.2532L146.218 30.6927C145.074 32.3341 142.879 33.7053 140.144 34.0613C136.475 34.5392 133.25 33.7376 131.531 30.4341V30.4335ZM130.358 22.9889C130.849 19.465 133.141 17.267 136.943 16.7722C139.945 16.3813 143.129 17.3917 144.7 21.1217L130.358 22.9889Z"
          variants={otherLetterVariants}
        />
        <motion.path
          d="M192.42 43.3589L183.292 43.3414V25.5422C183.292 24.3541 183.067 23.2245 182.615 22.1556C182.163 21.0861 181.546 20.1588 180.761 19.3748C179.976 18.5902 179.05 17.9724 177.98 17.5207C176.911 17.0691 175.782 16.8433 174.594 16.8433C173.405 16.8433 172.276 17.0691 171.206 17.5207C170.137 17.9724 169.21 18.5902 168.426 19.3748C167.641 20.1594 167.023 21.0861 166.572 22.1556C166.12 23.2251 165.894 24.3541 165.894 25.5422V43.3682H156.768V25.5422C156.768 23.0703 157.231 20.7532 158.158 18.5902C159.085 16.4278 160.356 14.5382 161.973 12.9219C163.589 11.3057 165.479 10.034 167.641 9.10721C169.804 8.1799 172.122 7.7168 174.593 7.7168C177.064 7.7168 179.382 8.18045 181.545 9.10721C183.708 10.034 185.597 11.3057 187.213 12.9219C188.83 14.5382 190.102 16.4278 191.028 18.5902C191.955 20.7526 192.418 23.0714 192.418 25.5422V43.3589H192.42Z"
          variants={otherLetterVariants}
        />
        <motion.path
          d="M215.809 17.4334L215.762 7.9291H208.418L208.465 0L198.654 0.0125755L198.709 7.90504H182.693C187.75 9.80011 190.181 12.371 192.326 17.054H198.654V29.6748C198.654 38.8609 201.347 43.4772 212.668 43.0441C213.649 43.007 218.728 42.7008 219.842 42.5871C217.609 40.1436 215.731 37.4142 215.809 33.1205C214.225 33.2167 212.877 33.2473 211.783 33.1309C209.627 32.8996 208.465 32.0893 208.465 30.0548V17.434H215.809V17.4334Z"
          variants={otherLetterVariants}
        />
        <motion.path
          d="M233.66 8.89746C239.198 8.89746 242.276 10.1599 245.188 12.6816C248.1 15.2043 249.802 18.7856 249.844 23.994L250 43.3039H239.778L239.814 38.4957C238.132 41.7369 234.85 43.357 229.968 43.357C227.384 43.357 225.148 42.9053 223.261 42.0032C221.374 41.1005 219.948 39.8801 218.984 38.3421C218.02 36.8035 217.538 35.05 217.538 33.0806C217.538 29.922 218.749 27.4703 221.169 25.7273C223.589 23.9842 227.322 23.1121 232.368 23.1121H240.775C240.57 19.5839 236.45 17.82 231.938 17.82C230.338 17.82 228.717 18.0765 227.076 18.5893C225.435 19.1022 224.04 19.8097 222.892 20.7124L218.954 12.7745C220.8 11.5438 223.046 10.5902 225.692 9.91334C228.338 9.23645 230.994 8.89801 233.66 8.89801L233.66 8.89746ZM233.229 35.973C234.583 35.973 235.773 35.6444 236.799 34.9883C237.824 34.3321 238.563 33.3677 239.014 32.0965V29.2041H233.968C230.562 29.2041 228.86 30.3326 228.86 32.5885C228.86 33.6143 229.25 34.4344 230.029 35.05C230.808 35.6651 231.875 35.973 233.229 35.973Z"
          variants={otherLetterVariants}
        />
      </svg>
    </motion.div>
  );
};
