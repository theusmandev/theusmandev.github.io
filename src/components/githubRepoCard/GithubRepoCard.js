import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="repo-card-div" style={{ backgroundColor: theme.highlight }}>
      <Fade bottom duration={2000} distance="40px">
        <div
          key={repo.id}
          onClick={() => openRepoinNewTab(repo.url)}
          style={{ cursor: "pointer" }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            {/* Safe check: Agar createdAt nahi hai, toh date show nahi hogi aur error bhi nahi aayega */}
            {repo.createdAt && (
              <p
                className="repo-creation-date subTitle"
                style={{ color: theme.secondaryText }}
              >
                Created on {repo.createdAt.split("T")[0]}
              </p>
            )}

            {/* Safe check: Agar languages nahi hain, toh component crash nahi hoga */}
            {repo.languages && (
              <ProjectLanguages
                className="repo-languages"
                logos={repo.languages}
              />
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
}
