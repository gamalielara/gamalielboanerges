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

export interface IPortfolioItem {
  name: string;
  year: string;
  tags: string[];
  tech_stacks: string[];
  description: string;
  gallery: Record<string, string>; // Key-value pair for image paths and descriptions
  my_contribution?: string[];
  project_link?: string;
  project_source_code?: string;
}

export interface IPortfolioManifest {
  portfolio: IPortfolioItem[];
}
