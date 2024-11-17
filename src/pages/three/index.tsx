import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const complaintSchema = z.object({
  name: z.string().min(5, {
    message: "Name must be at least 5 characters.",
  }),
  issue: z.string().min(15, {
    message: "Issue must be at least 15 characters.",
  }),
  details: z
    .string()
    .min(15, {
      message: "Details must be at least 15 characters.",
    })
    .max(160, {
      message: "Details must not be longer than 160 characters.",
    }),
});

export default function Three() {
  const navigate = useNavigate();
  const { toast } = useToast();
  // const { reset } = useForm();
  const form = useForm<z.infer<typeof complaintSchema>>({
    resolver: zodResolver(complaintSchema),
    defaultValues: {
      name: "",
      issue: "",
      details: "",
    },
  });

  const onSubmit = (data: { name: string; issue: string; details: string }) => {
    toast({
      title: "Sucess",
      description: JSON.stringify(data),
    });
    form.reset();
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-[33%] h-screen">
        <h1 className="bg-red-700 text-white px-5 py-5 rounded-t-lg text-lg flex flex-row gap-3 justify-start items-center">
          <ArrowLeft
            className="hover:bg-white hover:text-red-600 rounded-md cursor-pointer"
            width={30}
            height={30}
            onClick={() => navigate("/two", { replace: true })}
          />
          Complaint Form
        </h1>
        <div className=" px-5 py-5 rounded-t-md -mt-1 bg-white">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-y-6"
            >
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="issue"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Issue</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Issue"
                        {...field}
                        // onChange={(e) => field.onChange(e)}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="details"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Details</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your Details"
                        className="resize-none"
                        rows={8}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant="primary"
                className="text-lg"
                disabled={!form.formState.isDirty || !form.formState.isValid}
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
