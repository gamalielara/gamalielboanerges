export interface IContentText {
  about: {
    textContent: string;
    interest: string[];
    myPhoto: string;
  };
  portfolio: IPortfolio;
}

export interface IPortfolio {
  name: string[];
  tag: string[];
  description: string[];
  media: string[];
}
