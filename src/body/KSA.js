import React, { useState } from 'react';
import Card from '../card/Card';
import FiltersForm from '../filters_form/FiltersForm';
import { ksa_list } from '../countries-lists/ksa_data';
import { ProgressBar } from 'react-loader-spinner';
import TablePagination from '@mui/material/TablePagination'; // Import TablePagination from Material-UI

export default function KSA() {
    const [listToRender, setListToRender] = useState(ksa_list);
    const [searching, setSearching] = useState(false);
    const [page, setPage] = useState(0); // State for page number
    const [rowsPerPage, setRowsPerPage] = useState(10); // State for rows per page

    // Event handler for page change
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Event handler for rows per page change
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Reset page number to 0 when rows per page changes
    };

    // Render list based on pagination
    const renderList = listToRender.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
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
                setPage={setPage}
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
                        <>
                            <div className="cards-cont">
                                {renderList
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
                                    .map((item) => (
                                        <Card item={item} key={item.id} />
                                    ))}
                            </div>
                            <div className='pagination-div'>
                                <TablePagination
                                    component="div"
                                    count={listToRender.length} // Total count of items
                                    page={page}
                                    onPageChange={handleChangePage}
                                    rowsPerPage={rowsPerPage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
}