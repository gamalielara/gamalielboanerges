export interface IContentText {
  about: {
    pageName: string;
    textContent: string;
    interest: string[];
    myPhoto: string;
  };
  portfolio: IPortfolio;
}

export interface IPortfolio {
  pageName: string;
}
