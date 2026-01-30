import React from "react";

const LatestCollections = ({ intro1, intro2, title }) => {
  return (
    <section className="max-w-[1280px] mx-auto text-center py-10 px-4">
      <h2 className="uppercase text-3xl text-[#6B7280] dark:text-slate-300">
        <span>{intro1}</span>{" "}
        <span className="text-[#374151] dark:text-slate-100">{intro2}</span>
      </h2>

      <p className="inline-flex items-center gap-2 text-[#4e4949b3] dark:text-slate-300">
        {title}
        <span className="inline-block h-[2px] w-10 bg-black dark:bg-slate-200"></span>
      </p>
    </section>
  );
};

export default LatestCollections;
