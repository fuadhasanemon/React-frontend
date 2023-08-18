import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import "./teamMember.scss";

const TeamMember = ({ team }) => {
  const { name, position, image, socials } = team;

  return (
    <>
      <div className="team-member">
        <div className="card">
          <div className="card-body">
            <img className="w-100" src={image} alt="" />
            <h3 className="mt-2">{name}</h3>
            <p>{position}</p>

            <div className="socials">
              <ul>
                <li>
                  {socials.fb && (
                    <a href={socials.fb}>
                      <AiFillFacebook />
                    </a>
                  )}
                </li>
                <li>
                  {socials.insta && (
                    <a href={socials.insta}>
                      <AiFillInstagram />
                    </a>
                  )}
                </li>
                <li>
                  {socials.lin && (
                    <a href={socials.lin}>
                      <AiFillLinkedin />
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
