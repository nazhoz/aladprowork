import React from "react";
import CreateForm from "../components/createjob/CreateJobForm";
import MediaForm from "../components/createjob/MediaForm";

const CreateJob = () => {
  return (
    <div className="flex w-[100%] text-black">
      <CreateForm />
      <MediaForm />
    </div>
  );
};

export default CreateJob;
