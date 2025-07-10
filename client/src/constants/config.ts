type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Muslih Sahmat Portfolio",
    fullName: "Moh Muslih Sahmat",
    email: "sahmatmuslih@mail.com",
  },
hero: {
  name: "Muslih Sahmat",
  p: ["I'm a Web & Android Developer,", "Graphic Designer & Video Editor"],
},
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
  about: {
    p: "Introduction",
    h2: "Overview.",
    content: `I'm a versatile developer with experience in React and Laravel for web development, Kotlin for Android apps, and design skills using Adobe Illustrator, Figma, and After Effects. I build functional, user-focused applications and creative visual content to bring ideas to life.`,
  },
  experience: {
    p: "What I have done so far",
    h2: "Work Experience.",
  },
  feedbacks: {
    p: "What others say",
    h2: "Testimonials.",
  },
  works: {
    p: "My work",
    h2: "Projects.",
    content: `These projects highlight my skills in web, mobile, and visual design.showcasing my ability to develop cross-platform solutions and deliver impactful user experiences.`,
  },
},

};
