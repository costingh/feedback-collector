import { FormField } from '@/types/Form';
import { Option } from '@/types/Option';
import { LucideOctagon, AtSign, BriefcaseBusiness, Earth, Building2 } from 'lucide-react';

const options: any[] = [
  {
    key: "avatar",
    text: "Collect User Photo",
    description: "Collect user photos to make widgets that convert better because they look more authentic.",
    isEnabled: true,
    isRequired: false,
    icon: <LucideOctagon size={18} />,
    input: {
      type: "file",
      key: "avatar",
      accept: ".jpg,.png,.jpeg,.svg",
      text: "Photo with you",
      src: "/images/avatar-placeholder.jpg",
      alt: "Avatar",
      width: 50,
      height: 50,
    },
  },
  {
    key: "logo",
    text: "Collect Company Logo",
    description: "Collect company logos to create widgets that showcase the logos of your customers.",
    isEnabled: true,
    isRequired: false,
    icon: <LucideOctagon size={18} />,
    input: {
      type: "file",
      key: "logo",
      accept: ".jpg,.png,.jpeg,.svg",
      text: "Your Company Logo",
      src: "/images/company-placeholder-image.png",
      alt: "Logo",
      width: 70,
      height: 50,
    },
  },
  {
    key: "name",
    text: "Collect name",
    description: "Collect email addresses so you can stay in touch and send a thank you note",
    isEnabled: true,
    isRequired: true,
    icon: <AtSign size={18} />,
    alwaysRequired: true,
    input: { label: "Your Name", placeholder: "John Doe", key: "name" },
  },
  {
    key: "customer_email",
    text: "Collect customer email",
    description: "Collect email addresses so you can stay in touch and send a thank you note",
    isEnabled: true,
    isRequired: false,
    icon: <AtSign size={18} />,
    input: { label: "Email", placeholder: "john.doe@example.com", key: "email" },
  },
  {
    key: "job_title",
    text: "Job Title",
    description: "Collect job titles so you search by title, and group testimonials in some widgets.",
    isEnabled: true,
    isRequired: false,
    icon: <BriefcaseBusiness size={18} />,
    input: {
      label: "Job Title",
      placeholder: "Your Job Title",
      key: "jobTitle",
    },
  },
  {
    key: "website_url",
    text: "Collect Website URL",
    description: "Collect website URL so you can learn more about your customers, and include a link in some widgets.",
    isEnabled: true,
    isRequired: false,
    icon: <Earth size={22} />,
    input: {
      label: "Website",
      placeholder: "https://example.com",
      key: "website",
    },
  },
  {
    key: "collect_company",
    text: "Collect Company",
    description: "Collect company name so you can search for testimonials from the same company, and display it in some widgets.",
    isEnabled: true,
    isRequired: false,
    icon: <Building2 size={24} />,
    input: {
      label: "Company",
      placeholder: "Your Company",
      key: "company",
    },
  },
];

export default options;
