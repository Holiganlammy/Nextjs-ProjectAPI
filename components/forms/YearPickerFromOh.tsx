function Cpn() {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="rounded-full">
        <Button variant={"outline"} className={"w-[250px] justify-start text-left font-normal relative"}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {startYear && endYear ? (
            <div className="flex justify-between w-full text-center">
              <span className="w-[33.33%] ">{startYear}</span>
              <span className="w-[33.33%]">-</span>
              <span className="w-[33.33%]">{endYear}</span>
            </div>
          ) : (
            <div className="flex justify-between w-full text-center">
              <span className="w-[33.33%] ">Start Years</span>
              <span className="w-[33.33%]">-</span>
              <span className="w-[33.33%]">End Years</span>
            </div>
          )}
          {startYear && endYear && (
            <CircleX
              onClick={clearSelection}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 cursor-pointer text-gray-500 hover:text-red-500"
            />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 flex w-full">
        {/* Year Selector */}
        <div className="flex flex-col items-center p-4"> {/*border-r-2 border-orange-700*/}
          <div className="flex items-center justify-between w-full mb-4">
            <Button
              className="cursor-pointer bg-orange-700"
              onClick={() => setStartYearRange([startYearRange[0] - 20, startYearRange[1] - 20])}>
              <ChevronLeft />
            </Button>
            <div>
              <span className="font-bold">
                {startYearRange[0]} - {startYearRange[1]}
              </span>
            </div>
            <Button
              className="cursor-pointer bg-orange-700"
              onClick={() => setStartYearRange([startYearRange[0] + 20, startYearRange[1] + 20])}>
              <ChevronRight />
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-5">
            {Array.from({ length: 20 }, (_, i) => startYearRange[0] + i).map((year) => (
              <div
                key={year}
                className={cn(
                  "cursor-pointer p-2 rounded",
                  year === startYear || year === endYear
                    ? "text-orange-700 font-bold"
                    : "hover:text-orange-700"
                )}
                onClick={() => selectYear(year)}
              >
                {year}
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
