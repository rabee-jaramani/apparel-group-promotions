import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import FiltersForm from '../filters_form/FiltersForm'
import { data_list } from '../data.js'
import { ProgressBar } from 'react-loader-spinner'
export default function Body() {
    const [listToRender, setListToRender] = useState(data_list)
    const [searching, setSearching] = useState(false)
    useEffect(() => {
        // console.log(listToRender)
    }, [])

    return (
        <div className='cards-filters-body'>
            <FiltersForm
                searching={searching}
                setSearching={setSearching}
                originalList={data_list}
                listToRender={listToRender}
                setListToRender={setListToRender} />
            {
                searching ?
                    <div className='spinner-div'>
                        <ProgressBar
                            height="100"
                            width="100"
                            ariaLabel="progress-bar-loading"
                            wrapperStyle={{}}
                            wrapperClass="progress-bar-wrapper"
                            borderColor='#03257e'
                            barColor='#c4d600'
                        />
                    </div>
                    :
                    <>
                        {
                            listToRender.length < 1 ?
                                <h3 className='no-results'>No results</h3> :
                                <div className='cards-cont'>
                                    {
                                        listToRender.map((item) => {
                                            return <Card item={item} key={item.name}
                                            />

                                        })
                                    }
                                </div>
                        }
                    </>

            }
        </div>
    )
}
