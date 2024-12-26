// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addSkill,
//   removeSkill,
//   clearSkills,
//   setPersons,
// } from "../redux/skilsSlice";
// import data from "../Data/data.json";
// export default function Box() {
//   const dispatch = useDispatch();
//   const selectedSkills = useSelector((state) => state.skills.selectedSkills);
//   const persons = useSelector((state) => state.skills.persons);

//   // بارگذاری داده‌ها در ریداکس
//   React.useEffect(() => {
//     dispatch(setPersons(data));
//   }, [dispatch]);

//   // هندلر برای اضافه کردن اسکیل
//   const handleSkillClick = (skill) => {
//     dispatch(addSkill(skill));
//   };

//   // هندلر برای حذف اسکیل
//   const handleSkillRemove = (skill) => {
//     dispatch(removeSkill(skill));
//   };

//   // هندلر برای کلیر کردن اسکیل‌های انتخاب شده
//   const handleClearClick = () => {
//     dispatch(clearSkills());
//   };

//   return (
//     <>
//       {selectedSkills.length > 0 && (
//         <div className="skill-box bg-slate-400 ">
//           <button className="deletbtn" onClick={handleClearClick}>
//             Clear
//           </button>
//           {selectedSkills.map((skill) => (
//             <div key={skill} className="selected-skill">
//               {/* دکمه اسکیل انتخاب شده */}
//               <button className="selected-skill-btn">
//                 {skill}
//                 {/* دکمه ضرب برای حذف اسکیل انتخاب شده */}
//                 <span
//                   className="remove-skill-btn"
//                   onClick={() => handleSkillRemove(skill)}
//                 >
//                   ×
//                 </span>
//               </button>
//             </div>
//           ))}
//           {persons
//             .filter((person) => {
//               // بررسی شامل بودن تمامی اسکیل‌های انتخاب شده در میان languages، tools، role و level
//               const allSkills = [
//                 ...person.languages,
//                 ...person.tools,
//                 person.role,
//                 person.level,
//               ];
//               return selectedSkills.every((skill) => allSkills.includes(skill));
//             })
//             .map((person) => (
//               <div key={person.id}>{person.name}</div>
//             ))}
//         </div>
//       )}

//       <div className="bg-light">
//         {persons
//           .filter((person) => {
//             // نمایش فقط باکس‌های دارای اسکیل‌های انتخاب شده
//             const allSkills = [
//               ...person.languages,
//               ...person.tools,
//               person.role,
//               person.level,
//             ];
//             return (
//               selectedSkills.length === 0 ||
//               selectedSkills.every((skill) => allSkills.includes(skill))
//             );
//           })
//           .map((x, i) => (
// <div key={i} className="box">
//               <div className="pictureStyle ">
//                 <img src={x.logo} alt="" />
//               </div>
//               <div className="chaildBox1">
//                 <div className="ppppppppp">
//                   <p className="p-style">{x.company}</p>
//                   <div className="lightBtnp">
//                     <button className="lightBtn">
//                       <p className="newP">NEW!</p>
//                     </button>
//                   </div>
//                   <div className="darkBtnp">
//                     <button className="darkBtn">
//                       <p className="newP">FEATURED</p>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="coulemn">
//                   <div className="positionStyle">
//                     <p>{x.position}</p>
//                   </div>
//                   <div className="boxthreep">
//                     <p>{x.postedAt}</p>
//                     <p>{x.contract}</p>
//                     <p>{x.location}</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="rightBax">
//                 <button
//                   className="skilsBtn"
//                   onClick={() => handleSkillClick(x.role)}
//                 >
//                   <p className="skilsp">{x.role}</p>
//                 </button>
//                 <button
//                   className="skilsBtn"
//                   onClick={() => handleSkillClick(x.level)}
//                 >
//                   <p className="skilsp">{x.level}</p>
//                 </button>
//                 {x.languages.map((lang, idx) => (
//                   <button
//                     key={idx}
//                     className="skilsBtn"
//                     onClick={() => handleSkillClick(lang)}
//                   >
//                     <p className="skilsp">{lang}</p>
//                   </button>
//                 ))}
//                 {x.tools.map((tool, idx) => (
//                   <button
//                     key={idx}
//                     className="skilsBtn"
//                     onClick={() => handleSkillClick(tool)}
//                   >
//                     <p className="skilsp">{tool}</p>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// }

import React from "react";
import Header from "./header";
import { useDispatch, useSelector } from "react-redux";
import {
  addSkill,
  removeSkill,
  clearSkills,
  setPersons,
} from "../redux/skilsSlice";
import data from "../Data/data.json";
export default function Box() {
  const dispatch = useDispatch();
  const selectedSkills = useSelector((state) => state.skills.selectedSkills);
  const persons = useSelector((state) => state.skills.persons);

  // بارگذاری داده‌ها در ریداکس
  React.useEffect(() => {
    dispatch(setPersons(data));
  }, [dispatch]);

  // هندلر برای اضافه کردن اسکیل
  const handleSkillClick = (skill) => {
    dispatch(addSkill(skill));
  };

  // هندلر برای حذف اسکیل
  const handleSkillRemove = (skill) => {
    dispatch(removeSkill(skill));
  };

  // هندلر برای کلیر کردن اسکیل‌های انتخاب شده
  const handleClearClick = () => {
    dispatch(clearSkills());
  };

  return (
    // <>
    //   {selectedSkills.length > 0 && (
    //     <div className="skill-box  flex-wrap">
    //       <button className="deletbtn" onClick={handleClearClick}>
    //         Clear
    //       </button>
    //       {selectedSkills.map((skill) => (
    //         <div key={skill} className="selected-skill">
    //           {/* دکمه اسکیل انتخاب شده */}
    //           <button className="selected-skill-btn">
    //             {skill}
    //             {/* دکمه ضرب برای حذف اسکیل انتخاب شده */}
    //             <span
    //               className="remove-skill-btn"
    //               onClick={() => handleSkillRemove(skill)}
    //             >
    //               ×
    //             </span>
    //           </button>
    //         </div>
    //       ))}
    //       {persons
    //         .filter((person) => {
    //           // بررسی شامل بودن تمامی اسکیل‌های انتخاب شده در میان languages، tools، role و level
    //           const allSkills = [
    //             ...person.languages,
    //             ...person.tools,
    //             person.role,
    //             person.level,
    //           ];
    //           return selectedSkills.every((skill) => allSkills.includes(skill));
    //         })
    //         .map((person) => (
    //           <div key={person.id}>{person.name}</div>
    //         ))}
    //     </div>
    //   )}

    //   <div className="bg-light flex flex-wrap gap-24 ">
    //     {persons
    //       .filter((person) => {
    //         // نمایش فقط باکس‌های دارای اسکیل‌های انتخاب شده
    //         const allSkills = [
    //           ...person.languages,
    //           ...person.tools,
    //           person.role,
    //           person.level,
    //         ];
    //         return (
    //           selectedSkills.length === 0 ||
    //           selectedSkills.every((skill) => allSkills.includes(skill))
    //         );
    //       })
    //       .map((x, i) => (
    //         <div
    //           key={i}
    //           className=" whiteBox rounded-lg shadow-md border-l-8  ml-auto mr-auto flex flex-wrap	w-9/12 h-80   mt-0  sm:flex sm:h-40   "
    //         >
    //           <div className=" relative bottom-10 left-6 sm:top-20 sm:bottom-0  ">
    //             <img src={x.logo} alt="" />
    //           </div>
    //           <div className=" bg-slate-700 sm:w-full sm:h-40  sm:reletive top-10   ">
    //             <div className=" flex  mt-10 gap-5 flex-start mr-0 bg-red-500 sm:flex     justify-center ">
    //               <div className="mt-3  relative right-14">
    //                 <p className="p-style   ">{x.company}</p>
    //               </div>

    //               <div className="lightBtnp">
    //                 <button className="lightBtn">
    //                   <p className="newP">NEW!</p>
    //                 </button>
    //               </div>
    //               <div className="darkBtnp">
    //                 <button className="darkBtn">
    //                   <p className="newP">FEATURED</p>
    //                 </button>
    //               </div>
    //             </div>
    //             <div
    //               className="relative right-14 mt-3 "
    //             >
    //               <div className="positionStyle sm:text-black ">
    //                 <p className=" ">{x.position}</p>
    //               </div>
    //               <div className="boxthreep mt-8">
    //                 <p>{x.postedAt}</p>
    //                 <p>{x.contract}</p>
    //                 <p>{x.location}</p>
    //               </div>
    //             </div>
    //             <hr className="m-5 w-4/5 border-2 " />
    //           </div>

    //           {/*  */}

    //           {/*  */}
    //           <div className=" bg-green-300 rightBax flex   ml-8 mr-20 mb-8  sm:mb-0 flex-wrap sm:bg-slate-300 sm:flex=nowrap  ">
    //             <button
    //               className="skilsBtn rounded"
    //               onClick={() => handleSkillClick(x.role)}
    //             >
    //               <p className="skilsp p-1">{x.role}</p>
    //             </button>
    //             <button
    //               className="skilsBtn  rounded"
    //               onClick={() => handleSkillClick(x.level)}
    //             >
    //               <p className="skilsp p-1">{x.level}</p>
    //             </button>
    //             {x.languages.map((lang, idx) => (
    //               <button
    //                 key={idx}
    //                 className="skilsBtn  rounded"
    //                 onClick={() => handleSkillClick(lang)}
    //               >
    //                 <p className="skilsp p-1">{lang}</p>
    //               </button>
    //             ))}
    //             {x.tools.map((tool, idx) => (
    //               <button
    //                 key={idx}
    //                 className="skilsBtn  rounded"
    //                 onClick={() => handleSkillClick(tool)}
    //               >
    //                 <p className="skilsp p-1">{tool}</p>
    //               </button>
    //             ))}
    //           </div>
    //         </div>
    //       ))}
    //   </div>
    // </>
    <>
      <div className="bg-blue-100 w-full h-100 ">
        <Header />
      </div>
      {/* end header */}

      <div className="bg h-full w-full flex flex-col gap-5 items-center  ">
        {data.map((x, i) => {
          return (
            <>
              <div
                key={i}
                className=" whiteBox BIGBOX w-9/12 h-96  bg-white flex  mt-20 rounded-lg shadow-md border-l-8  sm:h-40"
              >
                <div className=" inline bg-gray-50 relative bottom-10 left-6 sm:top-10 sm:bottom-0  h-10 ">
                  <img className=" " src={x.logo} alt="" />
                </div>
                <div className=" flex h-10 w-9/12 gap-3 ml-0 bg-slate-500   mt-14 sm:mt-0ml-12 md:mt-0,ml-12  ">
                  <div className="mt-3  sm:mt-">
                    <p className="p-style   ">{x.company}</p>
                  </div>
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
            </>
          );
        })}
      </div>
    </>
  );
}
