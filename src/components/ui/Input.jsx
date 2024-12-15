function Input({label, ...props}) {
  return (
    <div className="w-full font-dmsans">
      <label
        for="input-label-with-helper-text"
        className="block text-sm md:text-base font-medium mb-2 dark:text-white"
      >
        {label}
      </label>
      <input
        {...props}
        id="input-label-with-helper-text"
        className="py-3 px-4 block w-full rounded-lg text-sm bg-[#242427] border-gold placeholder-neutral-500  focus:border-gold focus:ring-neutral-600"
        aria-describedby="hs-input-helper-text"
      />
    </div>
  );
}

export default Input;
