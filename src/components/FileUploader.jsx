import { useRef } from "react";
import { SlCloudUpload } from "react-icons/sl";
import { Button } from "@nextui-org/react";
import { IoIosClose } from "react-icons/io";

function FileUploader({Data, setData, label, mini}) {
  const DLRef = useRef();
  const handleDL = () => {
    DLRef.current.click();
  };
  const handleFileUpload = (e) => {
    const MAX_LENGTH = 2;
    if (Array.from(e.target.files).length > MAX_LENGTH) {
      e.preventDefault();
      alert(`Cannot upload files more than ${MAX_LENGTH}`);
      return;
    }

    const files = Array.from(e.target.files);
    const imageFiles = files.map((file) => URL.createObjectURL(file));
    setData((prevImages) => [...prevImages, ...imageFiles]);
  };
  const handleRemoveImage = (indexToRemove) => {
    setData(Data.filter((_, index) => index !== indexToRemove));
  };
  return (
    <div>
      <div className="file">
        <label
          for="textarea-label-with-helper-text"
          className="block text-sm md:text-base font-medium mb-2 dark:text-white"
        >
         {label}
        </label>
        <input
          className="hidden"
          ref={DLRef}
          type="file"
          name=""
          id=""
          multiple
          onChange={handleFileUpload}
          max={2}
        />
        <div className="bg-[#242427] p-[20px] w-full border-gold border rounded-lg flex flex-col items-center justify-center min-h-[160px] md:min-h-[200px]">
          <div className="flex flex-col gap-y-[20px] w-full">
            {Data.map((image, index) => (
              <div
                key={index}
                className="image-container w-full flex justify-between items-center border-b-1 pb-3 border-gold/30"
              >
                <div className="w-[60px] md:w-[90px] h-[60px] border border-white/50 overflow-hidden">
                  <img
                    className="w-full h-full object-center object-cover"
                    src={image}
                    alt={`Preview ${index}`}
                  />
                </div>
                <IoIosClose
                  className="text-3xl text-gold cursor-pointer"
                  onClick={() => handleRemoveImage(index)}
                />
              </div>
            ))}
          </div>
          {Data.length === 0 && (
            <SlCloudUpload className="text-gold text-[40px] md:text-[50px]" />
          )}
          <Button
            onClick={handleDL}
            className="font-dmsans bg-white text-black font-semibold mt-[25px] h-[35px] md:h-[40px]"
          >
            Browse
          </Button>
        </div>
        <p
          class="mt-2 text-sm font-dmsans text-neutral-500"
          id="hs-input-helper-text"
        >
          {mini}
        </p>
      </div>
    </div>
  );
}

export default FileUploader;
