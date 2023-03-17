import React, { useState } from 'react'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'

export default function FiltersForm(props) {
    // get the list and the setlist from props
    const { searching, setSearching, originalList, listToRender, setListToRender } = props
    console.log(listToRender)
    const [year, setYear] = useState("all")
    const [month, setMonth] = useState("all")
    const [country, setCountry] = useState("all")
    const [role_type, setRole_type] = useState("all")
    const [name, setName] = useState('')

    const filterByYear = (listToBeFiltered) => {
        if (year !== 'all') {
            let temp_list = listToBeFiltered.filter((e) => {
                return e.year === year;
            })
            return filterByMonth(temp_list);
        }
        else {
            return filterByMonth(listToBeFiltered)
        }
    }

    const filterByMonth = (listToBeFiltered) => {
        if (month !== 'all') {
            let temp_list = listToBeFiltered.filter((e) => {
                return e.month.toLowerCase() === month.toLowerCase();
            })
            return filterByCountry(temp_list);
        }
        else {
            return filterByCountry(listToBeFiltered)
        }
    }

    const filterByCountry = (listToBeFiltered) => {
        if (country !== 'all') {
            let temp_list = listToBeFiltered.filter((e) => {
                return e.country.toLowerCase() === country.toLowerCase();
            })
            return filterByRoleType(temp_list);
        }
        else {
            return filterByRoleType(listToBeFiltered)
        }
    }
    const filterByRoleType = (listToBeFiltered) => {
        if (role_type !== 'all') {
            let temp_list = listToBeFiltered.filter((e) => {
                return e.role_type.toLowerCase() === role_type.toLowerCase();
            })
            return filterByName(temp_list);
        }
        else {
            return filterByName(listToBeFiltered)
        }
    }
    const filterByName = (listToBeFiltered) => {
        if (name !== '') {
            let temp_list = listToBeFiltered.filter((e) => {
                return e.name.toLowerCase().includes(name.toLowerCase());
            })
            setSearching(false)
            return temp_list;
        }
        else {
            setSearching(false)
            return listToBeFiltered
        }
    }
    const handleSubmit = () => {
        setSearching(true)

        setTimeout(() => { setListToRender(filterByYear(originalList)) }, 1000);
    }
    return (
        <>
            <div className='filters-form-cont'>
                <FormControl fullWidth>
                    <InputLabel>BY YEAR</InputLabel>
                    <Select
                        value={year}
                        label="BY YEAR"
                        onChange={(e) => setYear(e.target.value)}
                        disabled={searching ? true : false}
                    >
                        <MenuItem value='all'>All</MenuItem>
                        <MenuItem value={2023}>2023</MenuItem>
                        <MenuItem value={2022}>2022</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel>BY MONTH</InputLabel>
                    <Select
                        value={month}
                        label="BY MONTH"
                        onChange={(e) => setMonth(e.target.value)}
                        disabled={searching ? true : false}
                    >
                        <MenuItem value='all'>All</MenuItem>
                        <MenuItem value='january'>January</MenuItem>
                        <MenuItem value='february'>February</MenuItem>
                        <MenuItem value='march'>March</MenuItem>
                        <MenuItem value='april'>April</MenuItem>
                        <MenuItem value='may'>May</MenuItem>
                        <MenuItem value='june'>June</MenuItem>
                        <MenuItem value='july'>July</MenuItem>
                        <MenuItem value='august'>August</MenuItem>
                        <MenuItem value='september'>September</MenuItem>
                        <MenuItem value='october'>October</MenuItem>
                        <MenuItem value='november'>November</MenuItem>
                        <MenuItem value='december'>December</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel>BY COUNTRY</InputLabel>
                    <Select
                        value={country}
                        label="BY COUNTRY"
                        onChange={(e) => setCountry(e.target.value)}
                        disabled={searching ? true : false}
                    >
                        <MenuItem value='all'>All</MenuItem>
                        <MenuItem value='UAE'>UAE</MenuItem>
                        <MenuItem value='QATAR'>QATAR</MenuItem>
                        <MenuItem value='KSA'>KSA</MenuItem>
                        <MenuItem value='KUWAIT'>KUWAIT</MenuItem>
                        <MenuItem value='OMAN'>OMAN</MenuItem>
                        <MenuItem value='BAHRAIN'>BAHRAIN</MenuItem>

                    </Select>
                </FormControl>



                <FormControl fullWidth>
                    <InputLabel>BY ROLE</InputLabel>
                    <Select
                        value={role_type}
                        label="BY ROLE TYPE"
                        onChange={(e) => setRole_type(e.target.value)}
                        disabled={searching ? true : false}
                    >
                        <MenuItem value='all'>All</MenuItem>
                        <MenuItem value='leadership'>Leadership</MenuItem>
                        <MenuItem value='sales front office'>Sales Front Office</MenuItem>
                        <MenuItem value='sales back office'>Sales Back Office</MenuItem>
                        <MenuItem value='support function'>Support Function</MenuItem>
                        <MenuItem value='distribution centre'>Distribution Centre</MenuItem>
                    </Select>
                </FormControl>





                <FormControl fullWidth>
                    <TextField
                        disabled={searching ? true : false}
                        label="BY NAME"
                        value={name}
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)} />
                </FormControl>
                <Button
                    disabled={searching ? true : false}
                    onClick={handleSubmit} variant='contained'>SEARCH
                </Button>
            </div>

        </>
    )
}
