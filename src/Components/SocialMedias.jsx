import { FaLinkedin, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';

export const SocialMedias = [
  {
    id: 1,
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/khalid-tourhzaoui/',
  },
  { id: 3, icon: <VscGithub />, url: 'https://github.com/khalid-tourhzaoui' },
  { id: 2, icon: <FaInstagram />, url: 'https://www.instagram.com/the_re_khalid/' },
  {
    id: 4,
    icon: <FaTwitter />,
    url: 'https://x.com/The__khalid',
  },
  {
    id: 5,
    icon: <FaWhatsapp />,
    url: 'https://wa.me/212766933356',
  },
];
export default SocialMedias;