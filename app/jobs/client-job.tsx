"use client";

import { JobListing } from "@prisma/client";
import { ChangeEvent, useState } from "react";
import InputWithLabel from "./input-job";
import { DropDown } from "@/components/dropdown";
import Card from "./card";

type ClientJob = {
  Emergency_Numbers: JobListing[];
};

const initialState = {
  title: "",
  location: "",
};

const intitutionType = [
  {
    value: "Govt-Institutions",
    label: "Govt-Institutions",
  },
  {
    value: "Private-institutions",
    label: "Private-institutions",
  },
];

export default function ClientJob({ jobs }: ClientJob) {
  const [state, setState] = useState(initialState);
  const [value, setValue] = useState("");

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  const filteredJobs = jobs.filter((item) => {
    const titleCondition =
      state.title === "" || item.title.includes(state.title);
    const location =
      state.location === "" || item.location.includes(state.location);
    const typeCondition = value === "" || item.type === value;

    return titleCondition && location && typeCondition;
  });

  return (
    <div>
      <div className="grid grid-cols-2 py-12 gap-2 container">
        <InputWithLabel
          type="text"
          label="Number"
          id="Number"
          placeholder="Number..."
          name="title"
          onChange={onChange}
        />
        <InputWithLabel
          type="text"
          label="Location"
          id="Location"
          placeholder="Location..."
          name="location"
          onChange={onChange}
        />

        <div>
          <DropDown value={value} setValue={setValue} jobType={intitutionType} />
        </div>
      </div>

      <div className="grid grid-cols-2 py-8 gap-y-8 container">
        {filteredJobs.map((item) => (
          <Card
            id={item.id}
            title={item.title}
            type={item.type}
            location={item.location}
            desc="Feel Free to Call this Number for Assitance"
            companyName={item.companyName}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
