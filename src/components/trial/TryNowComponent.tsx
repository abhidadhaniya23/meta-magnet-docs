import { Button, Input, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { code, link } from "../markdown";
import Loader from "../Loader";
import { toast } from "react-hot-toast";

const TryNowComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [responseData, setResponseData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const response = await axios
        .post("/api/get", {
          url: data.url.startsWith("http://" || "https://")
            ? data.url
            : "https://" + data.url,
        })
        .then((res) => res.data);

      setResponseData(response);
      setLoading(false);
    } catch (err) {
      toast.error("Something went wrong with the request :(");
      setResponseData(null);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mb-20 w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-5">
        <div className="flex flex-col gap-10 lg:sticky lg:top-20 mt-10 lg:mt-20">
          <Typography variant="h2" color="blue-gray">
            Try an API call from a URL
          </Typography>
          <form
            className="flex flex-col gap-4 justify-start"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              autoComplete="off"
              {...register("url", {
                required: true,
                pattern:
                  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm,
              })}
              size="lg"
              label="domain.com"
              error={errors.url as any}
            />
            {errors.url && (
              <Typography variant="small" color="red" className="text-red-500">
                {errors.url.type === "required" && "Please enter a valid URL"}
                {errors.url.type === "pattern" && "Please enter a valid URL"}
              </Typography>
            )}
            <Button size="md" type="submit" variant="outlined">
              Get Metadata
            </Button>
          </form>
        </div>
        {!loading && responseData && (
          <article className="w-full lg:w-3/5 prose prose-lg my-10 prose-pre:p-0 prose-a:no-underline prose-a:text-blue-500">
            <ReactMarkdown
              components={{
                code: code,
                a: link,
              }}
            >
              {"```json\n" + JSON.stringify(responseData, null, 2) + "\n```"}
            </ReactMarkdown>
          </article>
        )}{" "}
        {loading && (
          <div className="flex-1 flex justify-center items-center">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
};

export default TryNowComponent;
