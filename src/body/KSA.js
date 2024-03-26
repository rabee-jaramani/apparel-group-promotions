import React, {useState } from 'react';
import Card from '../card/Card';
import FiltersForm from '../filters_form/FiltersForm';
import { ksa_list } from '../countries-lists/ksa_data';
import { ProgressBar } from 'react-loader-spinner';
export default function KSA() {
  // here you give country list
  const [listToRender, setListToRender] = useState(ksa_list);
  const [searching, setSearching] = useState(false);
  const month_list = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div className="cards-filters-body">
      <FiltersForm
        searching={searching}
        setSearching={setSearching}
        originalList={ksa_list}
        listToRender={listToRender}
        setListToRender={setListToRender}
      />
      {searching ? (
        <div className="spinner-div">
          <ProgressBar
            height="100"
            width="100"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#03257e"
            barColor="#c4d600"
          />
        </div>
      ) : (
        <>
          {listToRender.length < 1 ? (
            <h3 className="no-results">No results</h3>
          ) : (
            <div className="cards-cont">
              {listToRender
                .sort((a, b) => {
                  const nameA = a.name.toUpperCase();
                  const nameB = b.name.toUpperCase();
                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }
                  return 0;
                })
                .sort((a, b) => {
                  if (month_list.indexOf(a.month) < month_list.indexOf(b.month))
                    return 1;
                  if (month_list.indexOf(a.month) > month_list.indexOf(b.month))
                    return -1;
                  return 0;
                })
                .sort((a, b) => {
                  if (a.role_type === 'Leadership') return -1;
                  if (b.role_type === 'Leadership') return 1;
                  return 0;
                })
                .sort((a, b) => {
                  if (parseInt(a.year) < parseInt(b.year)) return 1;
                  if (parseInt(a.year) > parseInt(b.year)) return -1;
                  return 0;
                })
                .map((item) => {
                  return <Card item={item} key={item.id} />;
                })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
