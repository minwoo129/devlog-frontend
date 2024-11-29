import { Variants } from "framer-motion";

type CommonVariantsType<K extends string> = {
  [key in K]: Variants;
};

type SlideToTopKeys = "y_30" | "y_50";
type SlideToLeftKeys = "x_30" | "x_50";
type SlideToBottomKeys = "y_100";
type FadeInWithChildrenKeys = "sc_0.1" | "sc_0.2";

export const SlideToTop: CommonVariantsType<SlideToTopKeys> = {
  y_30: {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  },
  y_50: {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  },
};

export const SlideToLeft: CommonVariantsType<SlideToLeftKeys> = {
  x_30: {
    hidden: {
      opacity: 0,
      x: 30,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  },
  x_50: {
    hidden: {
      opacity: 0,
      x: 50,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  },
};

export const SlideToBottom: CommonVariantsType<SlideToBottomKeys> = {
  y_100: {
    hidden: {
      opacity: 0,
      y: -100,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  },
};

export const FadeInWithChildren: CommonVariantsType<FadeInWithChildrenKeys> = {
  "sc_0.1": {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  "sc_0.2": {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
};

/* export const slideToTop: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const slideToLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export const fadeInWithChildren: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export const fadeInWithChildrenDelay2: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}; */
