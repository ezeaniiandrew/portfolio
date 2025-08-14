import { FaBehance, FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiTestinglibrary,
  SiTailwindcss,
  SiFramer,
  SiVitest,
} from "react-icons/si";
import todoCoverImageTop from "../assets/todo-cover-top.png";
import todoCoverImageBottom from "../assets/todo-cover-bottom.png";
import todoMobileImageOne from "../assets/todo-mobile-1.png";
import todoMobileImageTwo from "../assets/todo-mobile-2.png";
import todoPreview from "../assets/todo-preview.mp4";
import recordItCoverImageTop from "../assets/recordit-cover-top.png";
import recordItCoverImageBottom from "../assets/recordit-cover-bottom.png";
import recordItMobileImageOne from "../assets/recordit-mobile-1.webp";
import recordItMobileImageTwo from "../assets/recordit-mobile-2.webp";
import recordItPreview from "../assets/recordit-preview.mp4";
import nyeusiCoverImageTop from "../assets/nyeusi-cover-top.png";
import nyeusiCoverImageBottom from "../assets/nyeusi-cover-bottom.png";
import nyeusiMobileImageOne from "../assets/nyeusi-mobile-1.webp";
import nyeusiMobileImageTwo from "../assets/nyeusi-mobile-2.png";
import nyeusiPreview from "../assets/nyeusi-preview.mp4";

export const socialLinks = {
  developer: [
    { link: "github.com/ezeaniiandrew", icon: VscGithub },
    { link: "linktr.ee/ezeaniiandrew", icon: SiLinktree },
  ],
  designer: [
    { link: "https://www.behance.net/arif07", icon: FaBehance },
    { link: "www.linkedin.com/in/ezeani-andrew", icon: FaLinkedin },
  ],
};

export const skillSets = [
  { icon: FaHtml5, color: "#E34F26", name: "HTML5" },
  { icon: FaCss3Alt, color: "#1572B6", name: "CSS3" },
  { icon: FaSass, color: "#CC6699", name: "Sass" },
  { icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
  { icon: FaReact, color: "#61DAFB", name: "React" },
  { icon: SiVitest, color: "#6E9F18", name: "Vitest" },
  { icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js" },
  { icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
  { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { icon: SiTestinglibrary, color: "#E33332", name: "React Testing Library" },
  { icon: SiFramer, color: "#0055FF", name: "Framer Motion" },
  { icon: SiTailwindcss, color: "#38B2AC", name: "Tailwind CSS" },
];

export const projects = [
  {
    name: "Nyeusi",
    overview:
      "Nyeusi is a four-page website built for a premium furniture brand to establish their online presence. The site introduces the company, showcases completed projects with images and descriptions, and includes a contact form for inquiries. The design was provided, and my role was to bring it to life as a functional, responsive, and visually consistent website.",
    coverImageTop: nyeusiCoverImageTop,
    coverImageBottom: nyeusiCoverImageBottom,
    mobileImages: [nyeusiMobileImageOne, nyeusiMobileImageTwo],
    preview: nyeusiPreview,
    designer: "Provided by client",
    duration: "2 weeks",
    year: 2024,
    liveLink: "https://nyeusi.vercel.app/",
    githubRepo: "https://github.com/ezeaniiandrew/nyeusi",
    techStack: ["React", "SCSS", "Vite", "Framer Motion"],
    challenges: {
      intro:
        "Building Nyeusi’s website involved transforming a static design into a fully responsive and performance-focused web experience. Since the site serves as the brand’s primary digital presence, every detail needed to reflect the premium quality of their work while maintaining a smooth, intuitive user experience. This meant balancing high visual fidelity with technical performance, ensuring the site not only looked exceptional but also loaded quickly and adapted seamlessly across devices.",
      list: [
        {
          title: "Design Consistency",
          description:
            "Ensuring a consistent design across all four pages was essential for maintaining the brand’s premium look. The challenge came from translating the provided design files into code without predefined typography scales or spacing systems. To address this, I implemented SCSS variables for all brand colors, making it easier to maintain a unified visual identity throughout the project.",
        },
        {
          title: "Responsive Layouts",
          description:
            "Achieving responsiveness without a mobile-first approach required setting breakpoints based on content needs rather than fixed device sizes. This ensured each section adapted seamlessly to different screen widths, maintaining both readability and visual balance.",
        },
        {
          title: "Image Optimization",
          description:
            "The project showcase relied heavily on high-quality images to highlight the craftsmanship. Serving these large assets efficiently was key to maintaining performance. I integrated Cloudinary to handle image optimization, automatically serving the best format and resolution for each device while significantly reducing load times.",
        },
        {
          title: "Code Quality Automation",
          description:
            "Code quality automation was introduced during the project to maintain a consistent codebase. I used Stylelint to enforce SCSS coding standards and catch errors before they reached production. Husky was also configured to run lint checks automatically before every commit and to ensure commit messages followed a consistent convention. This setup prevented faulty code from being committed and kept the project’s history well-structured.",
        },
      ],
    },
    result:
      "The final website is a polished, responsive platform that effectively communicates Nyeusi’s brand identity. It provides visitors with a clear understanding of the company’s offerings, presents past work in a visually appealing way, and makes it easy for potential clients to get in touch.",
  },
  {
    name: "RecordIt",
    overview:
      "RecordIt is a modern, browser-based screen recording tool built with Next.js. It provides users with a full video recording, editing, and conversion workflow—all in the browser. With an intuitive interface and no installation needed, it offers screen capture with optional webcam overlay, timeline-based trimming, format conversion, and local file management without relying on external servers.",
    coverImageTop: recordItCoverImageTop,
    coverImageBottom: recordItCoverImageBottom,
    mobileImages: [recordItMobileImageOne, recordItMobileImageTwo],
    preview: recordItPreview,
    designer: "Andrew Ezeani",
    year: 2025,
    duration: "4 weeks",
    live: "https://recordit-pied.vercel.app/",
    github: "https://github.com/ezeaniiandrew/recordit",
    techStack: [
      "TypeScript",
      "Tailwind CSS",
      "FFmpeg.wasm",
      "IndexedDB",
      "Canvas API",
      "Web APIs",
      "React",
    ],
    challenges: {
      intro:
        "RecordIt was ambitious from the start. Merging screen capture, webcam overlay, video editing, and format conversion—all client-side—presented a few technical hurdles:",
      list: [
        {
          title: "Complex video compositing",
          description:
            "Combining screen and webcam feeds in real-time without tanking performance was tricky. I used the Canvas API to render both streams onto a single frame, allowing for custom webcam shapes, positions, and live previews during recording.",
        },
        {
          title: "Browser storage limits",
          description:
            "Managing large video files entirely on the client was another challenge. LocalStorage wasn’t an option—it’s limited to about 5MB and isn’t built for handling large files. Instead, I went with IndexedDB. It supports much larger storage capacity and gives more control over how data is saved and retrieved. I used it to handle all recording and conversion outputs locally, keeping everything private and fully in-browser.",
        },
        {
          title: "Client-side format conversion",
          description:
            "The app needed to export videos in multiple formats like MP4, WebM, and GIF—without server support. I integrated FFmpeg.wasm to handle all conversions inside the browser. To improve performance, I lazy-loaded FFmpeg and managed conversion jobs in a controlled async queue.",
        },
        {
          title: "Building a timeline editor",
          description:
            "Users needed a way to trim videos visually. I built a custom video editor UI with draggable handles, real-time preview, and keyboard-accessible controls. Syncing it with video playback while keeping interactions snappy was the real challenge.",
        },
      ],
    },
    result:
      "RecordIt successfully delivers a comprehensive screen recording solution that rivals desktop applications while running entirely in the browser. The project demonstrates advanced web technologies working together to create a seamless user experience. It runs instantly in any modern browser, provides responsive layouts for all screen sizes, and guides users through an intuitive recording and editing workflow. Behind the scenes, it leverages canvas-based compositing for efficient rendering, FFmpeg.wasm for offline format conversion, and IndexedDB for reliable storage of large video files. The architecture is modular, type-safe, and built for future extensibility, making the project both robust and scalable.",
  },
  {
    name: "Task App",
    overview:
      "Task App is a simple and responsive to-do list application built to help users efficiently manage their daily tasks. The app allows users to add, edit, complete, and delete tasks with a clean and intuitive user interface. It uses local storage to persist data between sessions, ensuring that user tasks are not lost on page refresh. The project focuses on a minimal, distraction-free layout with smooth interactions and accessibility in mind.",
    coverImageTop: todoCoverImageTop,
    coverImageBottom: todoCoverImageBottom,
    mobileImages: [todoMobileImageOne, todoMobileImageTwo],
    preview: todoPreview,
    challenges: {
      intro:
        "The main challenge in building Task App was making it accessible to keyboard users and screen readers while still maintaining a clean, interactive UI. Below are the three key accessibility hurdles I encountered and how I overcame them:",
      list: [
        {
          title: "Making the custom checkbox accessible",
          description:
            "When I started working on the accessibility of the custom checkbox, I found out that when I tabbed from the input element, I didn’t see any element that received focus. But if I kept tabbing, the focus eventually landed on one of the buttons after the todo list. After a bit of debugging, I realized that the native checkbox element does receive focus, but it’s not highlighted because it was hidden through opacity. So I had to add extra styles to create a custom highlight around the custom checkbox based on whether the native checkbox was being focused.",
          code: `.check:focus ~ .completed,
.check:focus ~ .active {
  outline: 2px solid #5b9dd9;
  outline-offset: 3px;
}`,
        },
        {
          title: "Making the edit and delete buttons accessible",
          description:
            "From the challenge guide provided by Frontend Mentor, on desktop, the delete button (I added the edit button) was supposed to only show when the task is hovered. I used the display property to achieve this before considering accessibility. By default, the div containing the buttons was set to display: none and then display: block once a todo item was hovered. It worked perfectly for mouse users. But when I started implementing accessibility, I wanted the buttons to be focusable by keyboard users. I also wanted that when either of the buttons had focus, the other should also be visible. So I swapped the display property for opacity. The hover interaction still worked, but for keyboard users, although the buttons received focus, they weren’t visible due to the parent div still having opacity: 0. To fix that, I added the following CSS using the :has() pseudo-class to detect focus.",
          code: `.container:has(button:not(:focus)):hover > div {
  opacity: 1;
}

.container:has(button:not(:focus)) > div {
  opacity: 0;

  @media screen and (hover: none) {
    & {
      opacity: 1;
    }
  }
}

.container:has(button:focus) > div {
  opacity: 1;
}`,
        },
        {
          title: "Trapping focus in the edit dialog",
          description:
            "Besides adding the necessary aria labels for screen readers, I also wanted to trap focus when the dialog was open. When a user clicks on the edit button, a dialog with a backdrop opens for them to edit the todo item. I wanted to ensure that keyboard users couldn’t accidentally tab back to elements behind the dialog. They should only be able to focus on the interactive elements inside the dialog. I also wanted the dialog to close when the user presses the Escape key. I implemented this using useEffect to listen for keydown events, identify the first and last focusable elements, and redirect focus as needed to keep it inside the modal.",
          code: `useEffect(() => {
  if (!modalRef.current) return;

  const focusableSelectors = "input, button";
  const modal = modalRef.current;
  const focusableElements = modal.querySelectorAll(focusableSelectors);
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      handleCloseModal();
      return;
    }

    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          e.preventDefault();
          (lastFocusableElement as HTMLElement).focus();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          e.preventDefault();
          (firstFocusableElement as HTMLElement).focus();
        }
      }
    }
  }

  modal.addEventListener("keydown", handleKeyDown);
  return () => {
    modal.removeEventListener("keydown", handleKeyDown);
  };
}, [handleCloseModal]);`,
        },
      ],
    },
    result:
      "The result is a fully functional and accessible task manager that performs smoothly across devices. The interface is intuitive and inclusive, supporting both mouse and keyboard navigation with clear visual cues. The accessibility improvements didn’t just meet the standard—they made the app feel better to use overall. It’s a solid foundation for more advanced features down the line.",
    designer: "Frontend Mentor",
    duration: "2 weeks",
    year: 2023,
    liveLink: "https://task-app-iota-five.vercel.app/",
    githubRepo: "https://github.com/ezeaniiandrew/task-app",
    techStack: ["React", "TypeScript", "Vite", "Tailwind", "framer motion"],
  },
];
