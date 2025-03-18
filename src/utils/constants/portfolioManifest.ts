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
      "description": "Lite version of Lucky draw, embedded in microsites (such as after payment page). Optimized web performance is crucial since this version has higher user traffic and impressions. To enhance user experience and retention, techniques like lazy loading, network waterfall optimization, and asset fetching management are implemented.",
      "gallery": {
        "luckydraw-iframe/1.png": 'Lucky Draw Iframe in Order Success Page',
        "luckydraw-iframe/2.gif": `Integration Lucky Draw Iframe with Full Page: to open popups and visit Ads Page. The Lucky Draw iframe is attached inside Shopee ID's coins page (daily checkin page)`,
      },
      "my_contribution": [
        "Involved in <b>9/11</b> Lucky Draw features, serving SEA + LATAM countries",
        "Handle integration between Lucky Draw Iframe and Fullpage through redirection LD Iframe - Full Page",
        "<b>Initiated and led integration testing</b> implementation in Lucky Draw, scaling from <b>0 to 303+ test cases, with 90.1% code coverage</b>",
        "Specifically worked in Lucky Draw iframe <b><em>Three Egg Mode</em></b> that is often used in Taiwan as their Business As Usual campaign",
      ]
    },
    {
      "name": "Shopee Buyer Mission",
      "year": "2022 - 2025",
      "tags": [
        "Gamification Shopee Indonesia",
        "ReactJS",
      ],
      "tech_stacks": [
        "ReactJS (CRA)",
        "TypeScript",
        "State Management: Redux Toolkit",
        "Frontend testing: Jest, React Testing Library (RTL), MSW"
      ],
      "description": `
         A <b>gamified engagement feature</b> designed to enhance user retention and drive transactions across Shopee’s key markets in <b>SEA + LATAM</b> countries. Highly used in <b>Indonesia, Malaysia, Philippines, Thailand, Taiwan, Vietnam, and Brazil</b>. The feature incentivizes users through daily and event-based missions, rewarding them with <b>vouchers, cashback, and Shopee Coins</b> to boost purchasing behavior. 
         Integrated with other services like Shopee Games, ShopeePay, Shopee PayLater, Order, and Add To Cart service. 
      `,
      "gallery": {
        "buyer-mission/1.gif": 'Buyer Mission Landing Page. In Shopee Indonesia, it is used inside Shopee Food as Business As Usual (BAU). Consisting tasks the user must complete to gain mission points',
        "buyer-mission/2.png": 'Redeem Store to exchange Mission Point with available rewards',
      },
      "my_contribution": [
        "Involved in Buyer Mission web performance by <b>reducing the FCP time to 30%</b>",
        "Contributed in <b>15+ features</b> in Buyer Mission, serving in SEA + LATAM countries (Indonesia, Malaysia, Philliphines, Thailand, Taiwan, Brazil)",
        '<b>Collaborated with Shopee Video  & Shopee Live team</b> (Regional & SZ team) to integrate Buyer Mission with task `Watch Livestream` and `Watch Shopee Video"',
        "Worked in Buyer Mission Leaderboard page, which was used as a big campaign in Indonesia. Translated 8 Figma design into real code"
      ]
    },
    // {
    //   "name": "Shopee Share and Win",
    //   "year": "2022 - 2023",
    //   "tags": [
    //     "Gamification Shopee Indonesia",
    //     "NextJS",
    //     "Web Performance"
    //   ],
    //   "tech_stacks": [
    //     "ReactJS (CRA)",
    //     "TypeScript",
    //     "State Management: Redux Toolkit",
    //     "Frontend testing: Jest, React Testing Library (RTL), MSW"
    //   ],
    //   "description": `
    //      A <b>gamified engagement feature</b> designed to enhance user retention and drive transactions across Shopee’s key markets in <b>SEA + LATAM</b> countries. Highly used in <b>Indonesia, Malaysia, Philippines, Thailand, Taiwan, Vietnam, and Brazil</b>. The feature incentivizes users through daily and event-based missions, rewarding them with <b>vouchers, cashback, and Shopee Coins</b> to boost purchasing behavior.
    //      Integrated with other services like Shopee Games, ShopeePay, Shopee PayLater, Order, and Add To Cart service.
    //   `,
    //   "gallery": {
    //     "buyer-mission/1.png": 'Buyer Mission Landing Page, consisting tasks the user must complete to gain mission points',
    //     "buyer-mission/2.png": 'Redeem Store to exchange Mission Point with available rewards',
    //   },
    //   "my_contribution": [
    //     "Involved in <b>9/11</b> Lucky Draw features, serving SEA + LATAM countries",
    //     "Handle integration between Lucky Draw Iframe and Fullpage through redirection LD Iframe - Full Page",
    //     "<b>Initiated and led integration testing</b> implementation in Lucky Draw, scaling from <b>0 to 303+ test cases, with 90.1% code coverage</b>",
    //     "Specifically worked in Lucky Draw iframe <b><em>Three Egg Mode</em></b> that is often used in Taiwan as their Business As Usual campaign",
    //   ]
    // },
    {
      "name": "gumrindelwald",
      "year": "2021 - now",
      "tags": [
        "Personal Project",
        "NextJS",
      ],
      "tech_stacks": [
        "NextJS 15",
        "TypeScript",
        "SASS (CSS Preprocessor)",
        "Firebase's Firestore (Blogs, likes and comment database)"
      ],
      "description": `
          A personal blog I created in 2021 when <b>I first taught myself web programming</b>. Released on November 1, 2021, it is still maintained and revamped every year. I mostly write about books and movies I find interesting here.
          Supports <b>like and comment</b> on an article and <b>light/dark mode</b> UI preference.
      `,
      "project_link": "https://www.gumrindelwald.com",
      "project_source_code": "https://github.com/gamalielara/gumrindelwald-blog",
      "gallery": {
        "gumrindelwald/1.gif": "gumrindelwald blog's Landing Page E2E flow. User can see blog cards and set dark/light mode preference."
      },
    },
    {
      "name": "folklorevermore chess",
      "year": "2021",
      "tags": [
        "Personal Project",
        "Javascript",
        "Game Development"
      ],
      "tech_stacks": [
        "TypeScript",
        "Webpack"
      ],
      "description": `
          My first web project: a regular chess game created by vanilla HTML, CSS, JavaScript
      `,
      "project_link": "https://gamalielara.github.io/folklorevermore-chess/",
      "project_source_code": "https://github.com/gamalielara/folklorevermore-chess",
      "gallery": {
        "folklorevermore-chess/1.gif": "A chess game I created E2E flow. Written using vanila HTML, CSS, JS."
      },
    },
  ]
}
