import { IPortfolioManifest } from "<utils>/types";

export const PORTFOLIO_MANIFEST: IPortfolioManifest = {
  "portfolio": [
    {
      "name": "Shopee Lucky Draw",
      "year": "2023 - 2025",
      "tags": [
        "Gamification Shopee Indonesia",
        "React Native",
        "Frontend Testing"
      ],
      "tech_stacks": [
        "React Native",
        "TypeScript",
        "State Management: Redux Toolkit",
        "Frontend testing: Jest, React Native Testing Library (RNTL), MSW"
      ],
      "description": "Shopee Indonesia's Gamification A1 project. Serves <b>46K+ daily users in SEA + LATAM countries</b> (Columbia, Brazil and Chile)\nBuilt using React Native.",
      "gallery": {
        "luckydraw/1.png": 'Lucky Draw Landing Page',
        "luckydraw/2.png": 'Lucky Draw "Available Prizes" Popup + Prize detail tooltip',
        "luckydraw/3.png": 'Lucky Draw TNC Popup',
        "luckydraw/4.gif": 'Integration Lucky Draw with Ads Page E2E flow',
        "luckydraw/5.png": 'Integration Lucky Draw ith Ads Page + Order Incentive (CTA Button)',
        "luckydraw/6.gif": 'Lucky Draw Three Eggs Mode used in Shopee Taiwan',
        "luckydraw/7.gif": 'Integration Lucky Draw ith Ads Page + Order Incentive E2E flow'
      },
      "my_contribution": [
        "Involved in <b>9/11</b> Lucky Draw features, serving SEA + LATAM countries",
        "<b>Initiated and led integration testing</b> implementation in Lucky Draw, scaling from <b>0 to 303+ test cases, with 90.1% code coverage</b>",
        "<b>Optimized Jest and RNTL testing runtime</b>, cutting testing runtime <b>by 76% (~300s to ~70s)</b> in CI, leading to faster deployments and a more efficient CI/CD process",
        "Specifically worked in Lucky Draw <b><em>Three Egg Mode and Order Incentive</em></b> that is often used in Taiwan as their Business As Usual campaign",
      ]
    },
    {
      "name": "Shopee Lucky Draw Iframe",
      "year": "2023 - 2025",
      "tags": [
        "Gamification Shopee Indonesia",
        "ReactJS",
      ],
      "tech_stacks": [
        "ReactJS (Web)",
        "TypeScript",
        "Bundler: Vite",
        "State Management: Redux Toolkit",
        "Frontend testing: Jest, React Testing Library (RTL), MSW"
      ],
      "description": "Lite version of Lucky draw, embedded in microsites (such as after payment page). Optimized web performance is necessary to enhance user experience and retention using lazy loading, network waterfall and asset fetching management.",
      "gallery": {
        "luckydraw-iframe/1.png": 'Lucky Draw Iframe in Order Success Page',
      },
      "my_contribution": [
        "Involved in <b>9/11</b> Lucky Draw features, serving SEA + LATAM countries",
        "Handle integration between Lucky Draw Iframe and Fullpage through redirection LD Iframe - Full Page",
        "<b>Initiated and led integration testing</b> implementation in Lucky Draw, scaling from <b>0 to 303+ test cases, with 90.1% code coverage</b>",
        "Specifically worked in Lucky Draw iframe <b><em>Three Egg Mode</em></b> that is often used in Taiwan as their Business As Usual campaign",
      ]
    },
  ]
}
