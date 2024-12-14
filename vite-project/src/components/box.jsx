
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSkill, clearSkill, setPersons } from '../redux/skilsSlice';
import data from "../Data/data.json";

export default function Box() {
  const dispatch = useDispatch();
  const selectedSkill = useSelector((state) => state.skills.selectedSkill);
  const persons = useSelector((state) => state.skills.persons);

  // بارگذاری داده‌ها در ریداکس
  React.useEffect(() => {
    dispatch(setPersons(data));
  }, [dispatch]);

  // هندلر برای انتخاب اسکیل
  const handleSkillClick = (skill) => {
    dispatch(selectSkill(skill));
  };

  // هندلر برای کلیر کردن اسکیل انتخاب شده
  const handleClearClick = () => {
    dispatch(clearSkill());
  };

  return (
    <>
      {selectedSkill && (
        <div className="skill-box">
          <button className='skill-box-btn' onClick={handleClearClick}>Clear</button>
          {persons
            .filter((person) => {
              // بررسی شامل بودن اسکیل انتخاب شده در میان languages، tools، role و level
              const allSkills = [...person.languages, ...person.tools, person.role, person.level];
              return allSkills.includes(selectedSkill) && "pp"
            })
            .map((person) => (
              <div key={person.id}>{person.name}</div>
            ))}
        </div>
      )}

      <div className="bg-light">
        {persons
          .filter((person) => {
            // نمایش فقط باکس‌های دارای اسکیل انتخاب شده
            const allSkills = [...person.languages, ...person.tools, person.role, person.level];
            return selectedSkill ? allSkills.includes(selectedSkill) : true;
          })
          .map((x, i) => (
            <div key={i} className="box">
              <div className="pictureStyle">
                <img src={x.logo} alt="" />
              </div>
              <div className="chaildBox1">
                <div className="ppppppppp">
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
                <div className="coulemn">
                  <div className="positionStyle">
                    <p>{x.position}</p>
                  </div>
                  <div className="boxthreep">
                    <p>{x.postedAt}</p>
                    <p>{x.contract}</p>
                    <p>{x.location}</p>
                  </div>
                </div>
              </div>
              <div className="rightBax">
                <button className="skilsBtn" onClick={() => handleSkillClick(x.role)}>
                  <p className="skilsp">{x.role}</p>
                </button>
                <button className="skilsBtn" onClick={() => handleSkillClick(x.level)}>
                  <p className="skilsp">{x.level}</p>
                </button>
                {x.languages.map((lang, idx) => (
                  <button key={idx} className="skilsBtn" onClick={() => handleSkillClick(lang)}>
                    <p className="skilsp">{lang}</p>
                  </button>
                ))}
                {x.tools.map((tool, idx) => (
                  <button key={idx} className="skilsBtn" onClick={() => handleSkillClick(tool)}>
                    <p className="skilsp">{tool}</p>
                  </button>
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
