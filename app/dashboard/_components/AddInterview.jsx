"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/lib/geminiModel";
import { LoaderCircle } from "lucide-react";
import { db } from "@/lib/db";
import { prepmate } from "@/lib/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/navigation";

const AddInterview = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDescription, setJobDescription] = useState();
  const [yearsOfExperience, setYearsOfExperience] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const router = useRouter();
  const { user } = useUser();

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    console.log(jobPosition, jobDescription, yearsOfExperience);

    const InputPrompt =
      "Job Position: " +
      jobPosition +
      ", Job Description: " +
      jobDescription +
      ", Years of Experience: " +
      yearsOfExperience +
      ", depending on the information provided, generate 5 interview questions with their answers in JSON Format, Give Question and Answer Field in JSON";
    const result = await chatSession.sendMessage(InputPrompt);
    const mockJsonResponse = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    console.log(JSON.parse(mockJsonResponse));
    setJsonResponse(mockJsonResponse);

    if (mockJsonResponse) {
      const response = await db
        .insert(prepmate)
        .values({
          mockId: uuidv4(),
          jsonRes: mockJsonResponse,
          jobPosition: jobPosition,
          jobDescription: jobDescription,
          jobExperience: yearsOfExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("DD-MM-YYYY"),
        })
        .returning({ mockId: prepmate.mockId });
      console.log("inserted ID: ", response);
      if (response) {
        setOpenDialog(false);
        router.push("/dashboard/interview/" + response[0]?.mockId);
      }
    } else {
      console.log("ERROR : No Response");
    }
    setIsLoading(false);
  };

  return (
    <div>
      <div
        className="p-10 border-4 border-black rounded-lg cursor-pointer bg-[#f4f1de] hover:scale-105 transition-all duration-300 hover:shadow-[4px_4px_0px_#000] relative"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="font-semibold text-xl text-center">+ Add New</h2>
      </div>

      <Dialog open={openDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800">
              Tell Us More About Your Job Interview
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit}>
                <div className="my-2">
                  <h2 className="text-lg">
                    Add Details about your Job Position/Role, Job Description,
                    and Year of Experience
                  </h2>
                  <div className="mt-8 mb-2">
                    <label className="text-lg font-semibold">
                      Job Position/Role
                    </label>
                    <Input
                      placeholder="Enter Job Position/Role: Ex. Full Stack Developer"
                      required
                      onChange={(e) => setJobPosition(e.target.value)}
                      className="border-4 border-black text-lg p-2 rounded-md shadow-[4px_4px_0px_#000]"
                    />
                  </div>
                  <div className="mt-8 mb-2">
                    <label className="text-lg font-semibold">
                      Job Description/Tech Stack
                    </label>
                    <Textarea
                      placeholder="Enter the Job Description: Ex. React, MongoDB, Express, AWS"
                      required
                      onChange={(e) => setJobDescription(e.target.value)}
                      className="border-4 border-black text-lg p-2 rounded-md shadow-[4px_4px_0px_#000]"
                    />
                  </div>
                  <div className="mt-8 mb-2">
                    <label className="text-lg font-semibold">
                      Years of Experience
                    </label>
                    <Input
                      placeholder="Enter Your Experience Years: Ex. 5"
                      type="number"
                      required
                      onChange={(e) => setYearsOfExperience(e.target.value)}
                      className="border-4 border-black text-lg p-2 rounded-md shadow-[4px_4px_0px_#000]"
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-5 gap-4">
                  <Button
                    variant="destructive"
                    onClick={() => setOpenDialog(false)}
                    type="button"
                    className="bg-red-500 hover:bg-red-600 border border-red-700"
                  >
                    Cancel
                  </Button>
                  <Button
                    className="bg-blue-400 border-4 border-blue-600 text-lg shadow-[4px_4px_0px_#000]"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <LoaderCircle className="animate-spin mx-0.5" />{" "}
                        Generating Questions....
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddInterview;
