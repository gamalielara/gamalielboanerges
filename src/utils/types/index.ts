export interface IContentText {
  about: {
    pageName: string;
    textContent: string;
    interest: string[];
    myPhoto: string;
  };
  portfolio: IPortfolioPage;
}

interface IPortfolioPage {
  pageName: string;
}

interface IPortfolioItem{
  name: string;
  year: string;
  tags: string[];
  tech_stacks: string[];
  description: string;
  gallery: Record<string, string>; // Key-value pair for image paths and descriptions
  my_contribution?: string[];
}

export interface IPortfolioManifest {
  portfolio: IPortfolioItem[];
}
