export type Project = {
    id: string;
    title: string;
    description?: string;
    tags?: string[];
    repoUrl?: string;
    demoUrl?: string;
  };
  
  export type Member = {
    id: string;
    name: string;
    role?: string;
    bio?: string;
    github?: string;
    linkedin?: string;
  };
  