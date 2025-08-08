const Editor = () => {
  return (
    <div className="flex gap-2.5 px-2">
      <input
        placeholder="새로운 Todo..."
        className="flex-1 px-4
        py-3
        border
        border-gray-300
        rounded
        text-sm
        sm:text-base
        placeholder:text-xs
        sm:placeholder:text-sm"
      />
      <button
        className="
      w-20  
      rounded 
      bg-blue-500
      text-sm sm:text-base
      text-white 
      cursor-pointer
      hover:bg-blue-600
      active:bg-blue-700
      focus:outline-none focus:ring-2 
      transition-colors duration-200 ease-in-out"
      >
        추가
      </button>
    </div>
  );
};

export default Editor;
