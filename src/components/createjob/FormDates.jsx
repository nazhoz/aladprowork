import React from 'react'

const FormDates = () => {
    const Manager = [
        { id: 1, name: "MOHAMMED ALI" },
        { id: 2, name: "ABDU RAHIM" },
        { id: 3, name: "MANIKANDAN MAMBATTA" },
        { id: 4, name: "MUHAMMED RASHID" },
      ];

      const partner =[
        { id: 1, name: "MOHAMMED ALI" },
        { id: 2, name: "ABDU RAHIM" },
        { id: 3, name: "MANIKANDAN MAMBATTA" },
        { id: 4, name: "MUHAMMED RASHID" },
      ]

  return (
    <div className='py-8 grid grid-cols-2 mt-3 px-4 gap-4 className="w-[100%]  bg-formbackgroundcolor  shadow-md rounded-lg mr-2 mt-3"'>
        <div className='text-[13px] font-semibold'>
        <span >
            Start Date <span className="text-red-600">*</span>
          </span>
            <input className='border-[1px] px-2 h-[35px] rounded-md text-xs w-[95%]  border-inputs outline-none focus:border-inputbordercolor' type="date" />
        </div>
        <div className='text-[13px] font-semibold'>
        <span >
            Due Date <span className="text-red-600">*</span>
          </span>
            <input className='border-[1px] px-2 h-[35px] rounded-md text-xs w-[95%]  border-inputs outline-none focus:border-inputbordercolor' type="date" />
        </div>
        <div className='text-[13px] font-semibold'>
        <span >
        Estimate Time(In hrs)
          </span>
            <input className='border-[1px] px-2 h-[35px] rounded-md text-xs w-[95%]  border-inputs outline-none focus:border-inputbordercolor' type="text" />
        </div>
        <div className='text-[13px] font-semibold '>
        <span >
        Service Amount
          </span>
            <input className='border-[1px] px-2 h-[35px] rounded-md text-xs w-[95%]  border-inputs outline-none focus:border-inputbordercolor' type="text" />
        </div>

        <div className="flex flex-col gap-2">
        <span className="text-[13px] font-semibold">
          Tagged Manager <span className="text-red-600">*</span>
        </span>
        <select
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
        >
          <option className="text-xs text-inputs" value="">
            --Select Manager--
          </option>
          {Manager.map((category) => (
            <option
              className="text-black "
              key={category.id}
              value={category.name}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>
        <div className="flex flex-col gap-2">
        <span className="text-[13px] font-semibold">
          Tagged Manager <span className="text-red-600">*</span>
        </span>
        <select
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
        >
          <option className="text-xs text-inputs" value="">
            --Select Partner--
          </option>
          {partner.map((category) => (
            <option
              className="text-black "
              key={category.id}
              value={category.name}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FormDates