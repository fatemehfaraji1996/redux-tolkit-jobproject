import React from "react";

import { useDispatch, useSelector } from "react-redux";
export default function ({x}) {
  const persons = useSelector((state) => state.skills.persons); // اشخاص را از استیت Redux می‌گیرد
    const dispatch = useDispatch(); // برای فراخوانی اکشن‌ها از dispatch استفاده می‌شود

 const selectedSkills = useSelector((state) => state.skills.selectedSkills); // اسکیل‌های انتخاب‌شده را از استیت Redux می‌گیرد

  const handleSkillClick = (skill) => {
    dispatch(addSkill(skill)); // اسکیل انتخاب‌شده را به استیت Redux اضافه می‌کند
  };

  const filteredPersons = persons.filter((person) => {
    return selectedSkills.every((skill) =>
      [
        person.role,
        person.level,
        ...person.languages,
        ...person.tools,
      ].includes(skill)
    ); // اشخاصی که تمام اسکیل‌های انتخاب‌شده را دارند، فیلتر می‌کند
  });

  return (
    <div className=" flex flex-col mr-5 ml-5  sm:w-auto sm-h-40 sm:mr-5 sm:flex sm:flex-row sm:gap-5 sm:h-40  sm:ml-14 md:w-10/12 md:gap-0 md:ml-20 md:flex md:flex-row md:pl-16  md:mt-0">
      <div className=" flex flex-col sm:flex sm:flex-col sm:pl-14 md:pl-1 ">
        <div className=" flex flex-col items-start  gap-3 mt-2 sm:flex sm:items-start   ">
          <div className="flex gap-3 ml-0">
            <p className="p-style">{x.company}</p>
            <div className="lightBtnp">
              <button className="lightBtn">
                <p className="newP">NEW!</p>
              </button>
            </div>
            <div className="darkBtnp">
              <button className="darkBtn">
                <p className="newP">FEATURED</p>
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div className="positionStyle">
            <p>{x.position}</p>
          </div>
          <div className="boxthreep">
            <p>{x.postedAt}</p>
            <p>{x.contract}</p>
            <p>{x.location}</p>
          </div>

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 sm:hidden" />
        </div>
      </div>
      <div className="  flex flex-wrap gap-3 sm:flex sm:flex-row sm:mt-auto sm:mb-auto sm:box-border  md:flex  md:gap-1 md:flex-row md:w-auto md:ml-auto  md:flex-wrap md:pl-0  ">
        <button
          className="skilsBtn rounded"
          onClick={() => handleSkillClick(x.role)}
        >
          <p className="skilsp p-1">{x.role}</p>
        </button>
        <button
          className="skilsBtn  rounded"
          onClick={() => handleSkillClick(x.level)}
        >
          <p className="skilsp p-1">{x.level}</p>
        </button>
        {x.languages.map((lang, idx) => (
          <button
            key={idx}
            className="skilsBtn  rounded"
            onClick={() => handleSkillClick(lang)}
          >
            <p className="skilsp p-1">{lang}</p>
          </button>
        ))}
        {x.tools.map((tool, idx) => (
          <button
            key={idx}
            className="skilsBtn  rounded"
            onClick={() => handleSkillClick(tool)}
          >
            <p className="skilsp p-1">{tool}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
