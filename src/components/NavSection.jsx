import React from "react";

import SectionButton from "./SectionButton";
import ProfileSection from "./ProfileSeciton";
import CompanySection from "./CompanySection";

import ProducterLogo from "../assets/producter_logo.svg";
import ProfileIcon2 from "../assets/profile_icon_2.svg";

import HomeSectionIcon from "../assets/home_section_icon.svg";
import FeedbackSectionIcon from "../assets/feedback_section_icon.svg";
import TaskSectionIcon from "../assets/task_section_icon.svg";
import RoadmapSectionIcon from "../assets/roadmap_section_icon.svg";
import ChangelogSectionIcon from "../assets/changelog_section_icon.svg";
import PlusSectionIcon from "../assets/plus_icon.svg";
import HelpSectionIcon from "../assets/help_community_icon.svg";
import NotificationSectionIcon from "../assets/notification_icon.svg";

const firstNavSections = [
  { name: "Dashboard", icon: <HomeSectionIcon /> },
  { name: "Feedback", icon: <FeedbackSectionIcon /> },
  { name: "Task", icon: <TaskSectionIcon /> },
  { name: "Roadmap", icon: <RoadmapSectionIcon /> },
  { name: "Changelog", icon: <ChangelogSectionIcon /> },
];
const secondNavSections = [
  { name: "Invite People", icon: <PlusSectionIcon /> },
  { name: "Help & Community", icon: <HelpSectionIcon /> },
  { name: "Notifications", icon: <NotificationSectionIcon /> },
];

export default function NavSection() {
  return (
    <div className="first-column ">
      <div className="logo">
        <ProducterLogo />
      </div>
      <div className="nav-section">
        <div className="nav-menu-1">
          {firstNavSections.map((section, index) => (
            <SectionButton key={index} text={section.name}>
              {section.icon}
            </SectionButton>
          ))}
        </div>
        <div className="nav-menu-2">
          {secondNavSections.map((section, index) => (
            <SectionButton key={index} text={section.name}>
              {section.icon}
            </SectionButton>
          ))}
        </div>
        <div className="nav-profile-menu">
          <div className="divider" />
          <ProfileSection name="Neil Larkins">
            <ProfileIcon2 />
          </ProfileSection>
          <div className="divider" />

          <CompanySection company="Epodpay Inc." />
        </div>
      </div>
    </div>
  );
}
