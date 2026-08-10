import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@nestorfanelli",
    icon: Icons.gitHub,
    link: "https://github.com/nestorraul631",
  },
  {
    name: "LinkedIn",
    username: "Nestor Fanelli",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/nestor-raul-fanelli-642a3a381",
  },
  {
    name: "Gmail",
    username: "Nestor Fanelli",
    icon: Icons.gmail,
    link: "mailto:nestor.dev.fanelli77@gmail.com",
  },
];
