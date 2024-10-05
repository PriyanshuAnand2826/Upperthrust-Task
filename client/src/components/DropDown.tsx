import { Select ,SelectContent,
  SelectTrigger,
  SelectValue,SelectGroup} from "@radix-ui/react-select"
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";







  interface Option {
    label: string;
    value: string;
  }
interface DropDownProps {
  options: Option[];
  placeholder?: string;
}

const DropDown: React.FC<DropDownProps> = ({
   options,
   placeholder = "Select Skills"
}) => {

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);


  const handleSelectOption = (value: string) => {
    setSelectedOptions((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };


  const handleSelectAll = () => {
    if (selectedOptions.length === options.length) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(options.map((option) => option.value));
    }
  };


  return(
    <div className="p-3">
      <p  className="text-center mt-4 font-bold text-2xl" style={{fontFamily:'DM Sans'}}>Upperthrust Dropdown with multi selection</p>
      
     
      <div className="flex justify-center item-center relative">
     <Select>
     <SelectTrigger className="mt-3 flex block w-80% p-2 border border-gray-300 rounded-md text-center" >
        <SelectValue className="w-100%" placeholder={selectedOptions.length > 0
          ? selectedOptions.join(', ')
          : placeholder} /> <FaAngleDown className="mt-2 ms-2" />
      </SelectTrigger>
      <SelectContent className=" z-10 w-[100%] bg-white border border-gray-300 rounded-md mt-14 shadow-lg  ">
      <div className="flex items-center p-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedOptions.length === options.length}
              onChange={handleSelectAll}
              className="mr-2"
            />
            <label>Select All</label>
          </div>
        <SelectGroup>
      {options.map((option)=>{
        return(
          <div key={option.value}  className="flex items-center p-2 cursor-pointer w-100%">
          <input
            type="checkbox"
            checked={selectedOptions.includes(option.value)}
            onChange={() => handleSelectOption(option.value)}
            className="mr-2"
          />
          <label>{option.label}</label>
        </div>

        )
      })}
      </SelectGroup>
      </SelectContent>
     </Select>
     </div>

    </div>
  )
}

export default DropDown