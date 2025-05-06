export type CvType = {
  firstname: string;
  lastname: string;
  cvPdf: string;
  account: {
    github?: string;
    linkedIn?: string;
    gmail?: string;
    whatsApp?: string;
    x?: string;
  };
  sections: {
    hero: {
      head: {
        title: string;
        descriptions: string[];
      };
      descriptions: string[];
    };
    aboutMe: {
      title: string;
      descriptions: string[];
    };
    education: {
      title: string;
      descriptions: string[];
      steps: [
        {
          title: string;
          date: string;
          descriptions: string[];
        }
      ];
    };
    experience: {
      title: string;
      descriptions: string[];
      steps: [
        {
          title: string;
          date: string;
          descriptions: string[];
        }
      ];
    };
    skills: {
      title: string;
      descriptions: string[];
      tags: {
        name: string;
        icon: string;
        techno: {
          name: string;
          value: number;
        }[];
      }[];
    };
    projects: {
      title: string;
      descriptions: string[];
      tags: {
        name: string;
        icon: string;
        projects: {
          name: string;
          title: string;
          url: string;
          image: string;
          techno: string[];
          descriptions: string[];
        }[];
      }[];
    };
    contactMe: {
      title: string;
      descriptions: string[];
      urlToPost: string;
    };
  };
};

export type CvTypeProps={
	data:CvType
}