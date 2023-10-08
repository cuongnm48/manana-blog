import * as React from "react";

interface HomeProps {}

export default function HomeBackground(props: HomeProps) {
  return (
    <div>
      <div className="items-center 2xl:max-w-7xl max-w-6xl md:px-12 mx-auto px-8 pt-32">
        <div className="border-b pb-5">
          <div className="max-w-xl">
            <p className="tracking-tight font-display text-4xl font-semibold font-merri">
              {`Welcome to Ma nana 's blog!`}
            </p>
            <p className="text-slate-600 mt-4 text-lg tracking-tight">
              Advice, Strategies, Insights and Stories for the success of companies, schools and
              start-ups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
