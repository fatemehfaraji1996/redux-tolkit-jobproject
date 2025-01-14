import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   
    removeSkill,
    clearSkills,
   
  } from "../redux/skilsSlice";
 
export default function () {
    
    const persons = useSelector((state) => state.skills.persons); // اشخاص را از استیت Redux می‌گیرد
    const dispatch = useDispatch(); // برای فراخوانی اکشن‌ها از dispatch استفاده می‌شو
    
 const selectedSkills = useSelector((state) => state.skills.selectedSkills); // اسکیل‌های انتخاب‌شده را از استیت Redux می‌گیرد

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

 const handleSkillRemove = (skill) => {
    dispatch(removeSkill(skill)); // اسکیل انتخاب‌شده را از استیت Redux حذف می‌کند
  };


    const handleSkillClear =(skill)=>{
  dispatch(clearSkills(skill))
    }

  return (
    <div>
      {selectedSkills.length > 0 && ( // این بخش فقط زمانی نمایش داده می‌شود که اسکیل انتخاب شده باشد
        <div className=" bg-white p-4 shadow rounded-md w-10/12 mr-auto ml-auto py-4 mt-0 flex flex-wrap gap-3">
          {selectedSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-btn  h-10 pl-2 rounded flex items-center"
            >
              <span>{skill}</span>
              <button
                className="ml-2 h-10 w-6 bg-remove rounded text-white bg-green-100"
                onClick={() => handleSkillRemove(skill)}
              >
                &times;
              </button>
            </div>
          ))}
          <div className="ml-auto ">
            <button
              onClick={() => handleSkillClear()}
              className="shadow mr-auto p-1"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
