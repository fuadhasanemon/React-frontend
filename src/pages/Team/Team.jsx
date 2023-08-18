import React from "react";
import TeamMember from "../../components/TeamMember/TeamMember";
import Title from "../../components/Title/Title";
import { team } from "../../faker/team";
import "./team.scss";

const Team = () => {
  return (
    <>
      <div className="our-team py-5">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <Title
                title="Our Developers"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                vero fugiat doloremque illo porro accusantium, odit nam atque aliquam?
                Placeat!"
                divider={true}
              />
            </div>
          </div>

          <div className="row">
            {team.map((item, index) => (
              <div className="col-md-3" key={index}>
                <TeamMember team={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
