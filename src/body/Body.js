// import React, { useEffect, useState } from 'react';
// import Card from '../card/Card';
// import FiltersForm from '../filters_form/FiltersForm';
// import { data_list } from '../data.js';
// import { ProgressBar } from 'react-loader-spinner';
// export default function Body() {
//   const [listToRender, setListToRender] = useState(data_list);
//   const [list_UAE, setList_UAE] = useState([]);
//   const [list_KSA, setList_KSA] = useState([]);
//   const [list_OMAN, setList_OMAN] = useState([]);
//   const [list_BAHRAIN, setList_BAHRAIN] = useState([]);
//   const [list_KUWAIT, setList_KUWAIT] = useState([]);
//   const [list_QATAR, setList_QATAR] = useState([]);
//   const [searching, setSearching] = useState(false);
//   const month_list = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];
//   const countries_lists = (list) => {
//     const tem_list_UAE = [];
//     const tem_list_KSA = [];
//     const tem_list_OMAN = [];
//     const tem_list_QATAR = [];
//     const tem_list_BAHRAIN = [];
//     const tem_list_KUWAIT = [];
//     for (let i = 0; i < list.length; i++) {
//       if (list[i].country.toUpperCase() === 'UAE') {
//         tem_list_UAE.push(list[i]);
//       }
//       if (list[i].country.toUpperCase() === 'KSA') {
//         tem_list_KSA.push(list[i]);
//       }
//       if (list[i].country.toUpperCase() === 'OMAN') {
//         tem_list_OMAN.push(list[i]);
//       }
//       if (list[i].country.toUpperCase() === 'QATAR') {
//         tem_list_QATAR.push(list[i]);
//       }
//       if (list[i].country.toUpperCase() === 'BAHRAIN') {
//         tem_list_BAHRAIN.push(list[i]);
//       }
//       if (list[i].country.toUpperCase() === 'KUWAIT') {
//         tem_list_KUWAIT.push(list[i]);
//       }
//     }
//     setList_UAE(tem_list_UAE);
//     setList_KSA(tem_list_KSA);
//     setList_OMAN(tem_list_OMAN);
//     setList_BAHRAIN(tem_list_BAHRAIN);
//     setList_KUWAIT(tem_list_KUWAIT);
//     setList_QATAR(tem_list_QATAR);
//   };
//   useEffect(() => {
//     countries_lists(listToRender);
//   }, [listToRender]);

//   return (
//     <div className="cards-filters-body">
//       <FiltersForm
//         searching={searching}
//         setSearching={setSearching}
//         originalList={data_list}
//         listToRender={listToRender}
//         setListToRender={setListToRender}
//       />
//       {searching ? (
//         <div className="spinner-div">
//           <ProgressBar
//             height="100"
//             width="100"
//             ariaLabel="progress-bar-loading"
//             wrapperStyle={{}}
//             wrapperClass="progress-bar-wrapper"
//             borderColor="#03257e"
//             barColor="#c4d600"
//           />
//         </div>
//       ) : (
//         <>
//           {listToRender.length < 1 ? (
//             <h3 className="no-results">No results</h3>
//           ) : (
//             <div className="cards-cont">
//               {/* UAE */}
//               {list_UAE
//                 .sort((a, b) => {
//                   const nameA = a.name.toUpperCase();
//                   const nameB = b.name.toUpperCase();
//                   if (nameA < nameB) {
//                     return -1;
//                   }
//                   if (nameA > nameB) {
//                     return 1;
//                   }
//                   return 0;
//                 })
//                 .sort((a, b) => {
//                   if (a.role_type === 'Leadership') return -1;
//                   if (b.role_type === 'Leadership') return 1;
//                   return 0;
//                 })
//                 .sort((a, b) => {
//                   if (parseInt(a.year) < parseInt(b.year)) return 1;
//                   if (parseInt(a.year) > parseInt(b.year)) return -1;
//                   return 0;
//                 })
//                 .sort((a, b) => {
//                   if (month_list.indexOf(a.month) < month_list.indexOf(b.month))
//                     return 1;
//                   if (month_list.indexOf(a.month) > month_list.indexOf(b.month))
//                     return -1;
//                   return 0;
//                 })
//                 .map((item) => {
//                   return <Card item={item} key={item.id} />;
//                 })}
//               {/* QATAR */}
//               {list_QATAR
//                 .sort((a, b) => {
//                   const nameA = a.name.toUpperCase();
//                   const nameB = b.name.toUpperCase();
//                   if (nameA < nameB) {
//                     return -1;
//                   }
//                   if (nameA > nameB) {
//                     return 1;
//                   }
//                   return 0;
//                 })
//                 .sort((a, b) => {
//                   if (a.role_type === 'Leadership') return -1;
//                   if (b.role_type === 'Leadership') return 1;
//                   return 0;
//                 })
//                 .sort((a, b) => {
//                   if (parseInt(a.year) < parseInt(b.year)) return 1;
//                   if (parseInt(a.year) > parseInt(b.year)) return -1;
//                   return 0;
//                 })
//                 .sort((a, b) => {
//                   if (month_list.indexOf(a.month) < month_list.indexOf(b.month))
//                     return 1;
//                   if (month_list.indexOf(a.month) > month_list.indexOf(b.month))
//                     return -1;
//                   return 0;
//                 })
//                 .map((item) => {
//                   return <Card item={item} key={item.id} />;
//                 })}

//               {/* KUWAIT */}
//               {list_KUWAIT
//                 .sort((a, b) => {
//                   const nameA = a.name.toUpperCase();
//                   const nameB = b.name.toUpperCase();
//                   if (nameA < nameB) {
//                     return -1;
//                   }
//                   if (nameA > nameB) {
//                     return 1;
//                   }
//                   return 0;
//                 })
//                 .sort((a, b) => {
//                   if (a.role_type === 'Leadership') return -1;
//                   if (b.role_type === 'Leadership') return 1;
//                   return 0;
//                 })
//                 .sort((a, b) => {
//                   if (parseInt(a.year) < parseInt(b.year)) return 1;
//                   if (parseInt(a.year) > parseInt(b.year)) return -1;
//                   return 0;
//                 })
//                 .sort((a, b) => {
//                   if (month_list.indexOf(a.month) < month_list.indexOf(b.month))
//                     return 1;
//                   if (month_list.indexOf(a.month) > month_list.indexOf(b.month))
//                     return -1;
//                   return 0;
//                 })

//                 .map((item) => {
//                   return <Card item={item} key={item.id} />;
//                 })}

//               {/* BAHRAIN */}
//               {list_BAHRAIN
//                 .sort((a, b) => {
//                   const nameA = a.name.toUpperCase();
//                   const nameB = b.name.toUpperCase();
//                   if (nameA < nameB) {
//                     return -1;
//                   }
//                   if (nameA > nameB) {
//                     return 1;
//                   }
//                   return 0;
//                 })
//                 .sort((a, b) => {
//                   if (a.role_type === 'Leadership') return -1;
//                   if (b.role_type === 'Leadership') return 1;
//                   return 0;
//                 })
//                 .sort((a, b) => {
//                   if (parseInt(a.year) < parseInt(b.year)) return 1;
//                   if (parseInt(a.year) > parseInt(b.year)) return -1;
//                   return 0;
//                 })
//                 .sort((a, b) => {
//                   if (month_list.indexOf(a.month) < month_list.indexOf(b.month))
//                     return 1;
//                   if (month_list.indexOf(a.month) > month_list.indexOf(b.month))
//                     return -1;
//                   return 0;
//                 })

//                 .map((item) => {
//                   return <Card item={item} key={item.id} />;
//                 })}
//               {/* OMAN */}
//               {list_OMAN
//                 .sort((a, b) => {
//                   const nameA = a.name.toUpperCase();
//                   const nameB = b.name.toUpperCase();
//                   if (nameA < nameB) {
//                     return -1;
//                   }
//                   if (nameA > nameB) {
//                     return 1;
//                   }
//                   return 0;
//                 })
//                 .sort((a, b) => {
//                   if (a.role_type === 'Leadership') return -1;
//                   if (b.role_type === 'Leadership') return 1;
//                   return 0;
//                 })
//                 .sort((a, b) => {
//                   if (parseInt(a.year) < parseInt(b.year)) return 1;
//                   if (parseInt(a.year) > parseInt(b.year)) return -1;
//                   return 0;
//                 })
//                 .sort((a, b) => {
//                   if (month_list.indexOf(a.month) < month_list.indexOf(b.month))
//                     return 1;
//                   if (month_list.indexOf(a.month) > month_list.indexOf(b.month))
//                     return -1;
//                   return 0;
//                 })

//                 .map((item) => {
//                   return <Card item={item} key={item.id} />;
//                 })}

//               {/* KSA */}
//               {list_KSA
//                 .sort((a, b) => {
//                   const nameA = a.name.toUpperCase();
//                   const nameB = b.name.toUpperCase();
//                   if (nameA < nameB) {
//                     return -1;
//                   }
//                   if (nameA > nameB) {
//                     return 1;
//                   }
//                   return 0;
//                 })
//                 .sort((a, b) => {
//                   if (a.role_type === 'Leadership') return -1;
//                   if (b.role_type === 'Leadership') return 1;
//                   return 0;
//                 })
//                 .sort((a, b) => {
//                   if (parseInt(a.year) < parseInt(b.year)) return 1;
//                   if (parseInt(a.year) > parseInt(b.year)) return -1;
//                   return 0;
//                 })
//                 .sort((a, b) => {
//                   if (month_list.indexOf(a.month) < month_list.indexOf(b.month))
//                     return 1;
//                   if (month_list.indexOf(a.month) > month_list.indexOf(b.month))
//                     return -1;
//                   return 0;
//                 })

//                 .map((item) => {
//                   return <Card item={item} key={item.id} />;
//                 })}
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }
