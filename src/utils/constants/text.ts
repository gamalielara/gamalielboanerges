interface IText {
  about: {
    textContent: string;
    interest: string[];
    myPhoto: string;
  };
}

const ENGLISH_TEXT: IText = {
  about: {
    textContent: `
        A Frontend Engineer who worked a lot with user-facing features in Gamification Team Frontend Shopee Indonesia. He played a key role in the development of major gamification features such as Lucky Draw (React Native) and Buyer Mission (React Web), collaborating with designers to translate the feature’s UI design in Figma into reality in React Native or React Web environment.
        With a strong focus on defensive CSS, he ensures consistent UI behavior across devices. He is also passionate about frontend testing and automation, such as leading the implementation of integration testing in Lucky Draw from <b>0 to 300+ test cases</b> and <b>significantly reducing testing time by 76% (from ~300s to ~70s).</b> His contributions accelerated the CI/CD process, enabling faster and more reliable releases.
      `,
    interest: [
      "Frontend Testing",
      "Browser Automation",
      "React Native",
      "Android Development",
      "Translation"
    ],
    myPhoto: "18gMa66bwgZCrOaXfcY70MaoOT8vOr_Vm"
  }
};

export const CONTENT = ENGLISH_TEXT;
