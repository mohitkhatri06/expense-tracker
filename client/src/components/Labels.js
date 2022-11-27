import React from 'react'
import {default as api} from '../store/apiSlice'


export default function Labels() {

    const {data, isFetching, isSuccess, isError} = api.useGetCategoriesQuery()
    let Transactions;

    if(isFetching){
        Transactions = <div>Fetching</div>
    }else if(isSuccess){
        Transactions = data.map((v, i) => <LabelComponent key={i} data={v}></LabelComponent>)
    }else if(isError){
        Transactions = <div>Error</div>
    }

  return (
    <>
    {Transactions}
    </>
  )
}

function LabelComponent({data}) {
    if(!data) return <></>
    return (
        <div className='labels flex justify-between'>
            <div className='flex gap-2'>
                <div className='w-2 h-2 rounded py-3' style={{background:data.color??'#f9c74f'}}></div>
                <h3 className='text-md'>{data.type??''}</h3>
            </div>
            <h3 className='font-bold'>{data.percent ?? 0}%</h3>
        </div>
    )
}
