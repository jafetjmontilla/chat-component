export const transitionRight = {
  true: {
    "width": "100%",
    "transition-property": "left",
    "transition-duration": "0.3s",
    "transition-delay": "0s",
    "left": "100%",
  },
  false: {
    "width": "100%",
    "transition-property": "left",
    "transition-duration": "0.3s",
    "transition-delay": "0s",
    "left": "0px",
  }
} as React.CSSProperties

export const transitionLeft = {
  true: {
    "width": "100%",
    "transition-property": "left",
    "transition-duration": "0.4s",
    "transition-delay": "0s",
    "left": "0px",
  },

  false: {
    "width": "100%",
    "transition-property": "left",
    "transition-duration": "0.4s",
    "transition-delay": "0s",
    "left": "-50%",
  }
} as React.CSSProperties

export const transitionVisibilite = {
  false: {
    position: "absolute",
    "transition-property": "opacity",
    "transition-duration": "1s",
    "transition-delay": "0s",
    "opacity": "0",
  },
  true: {
    position: "absolute",
    "transition-property": "opacity",
    "transition-duration": "1s",
    "transition-delay": "0s",
    "opacity": "1",
  }
} as React.CSSProperties
