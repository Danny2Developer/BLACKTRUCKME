import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Buttons from "../components/ui/Button";

function AddBrand() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4 md:mb-8">
        <h4 className=" text-lg font-semibold text-gray-300 font-syne">
          Add Brand
        </h4>
        <Link to="/dashboard/brands">
          <Button className="bg-transparent font-syne border-2 border-red-600 text-white">
            back
          </Button>
        </Link>
      </div>
      <div>
        <div className="px-4 py-3 mb-8 rounded-lg shadow-md bg-gray-800">
          <form action="" className="font-syne">
            
            <div className="grid grid-cols-1 gap-5">
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text  text-[15px] text-white">
                    Brand Name
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
                />
              </div>
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text  text-[15px] text-white">
                    Upload Brand Image
                  </span>
                </div>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
                />
              </div>
            </div>

            <Buttons className="bg-gold text-mod rounded-md py-[7px] w-full md:w-auto justify-center mb-[10px] md:font-medium md:rounded-md md:py-[8px] mt-[30px] ms-auto flex">
              Submit
            </Buttons>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBrand;
