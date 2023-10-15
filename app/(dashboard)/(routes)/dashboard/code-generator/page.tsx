"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Code, Divide } from "lucide-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Heading from "@/components/Heading";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/Empty";
import Loader from "@/components/Loader";
import { formSchema } from "@/lib/formSchema";

import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { axiosInstance } from "@/lib/axiosInstance";
import { cn } from "@/lib/utils";
import UserAvatar from "@/components/UserAvatar";
import BotAvatar from "@/components/BotAvatar";

export default function CodeGenerator() {
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  const { handleSubmit, formState, reset } = form;

  const { isSubmitting } = formState;

  const onSubmit = async (formValues: z.infer<typeof formSchema>) => {
    try {
      const userMessages: ChatCompletionMessageParam = {
        role: "user",
        content: formValues.prompt,
      };
      const newMessages = [...messages, userMessages];

      const { data } = await axiosInstance.post("/api/code-generation", {
        messages: newMessages,
      });

      setMessages((prev) => [...prev, userMessages, data]);

      reset();
    } catch (error) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <main>
      <Heading
        title="Generate Kode"
        description="Our most conversation model"
        icon={Code}
        iconColor="text-[#41605A]"
        bgColor="bg-[#D8FFF7]"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              className="grid w-full grid-cols-12 gap-2 p-4 px-3 border rounded-lg md:px-6 focus-within:shadow-sm"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="p-0 m-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isSubmitting}
                        placeholder="Ketik promptmu disini"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 bg-[#41605A] w-full"
                disabled={isSubmitting}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="mt-5 space-y-4">
          {messages.length === 0 && !isSubmitting && (
            <Empty label={"Tidak ada code yang digenerate"} />
          )}
          {isSubmitting && <Loader />}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "p-8 w-full flex items-center gap-x-8 rounded-lg",
                  {
                    "bg-white border border-black/10": message.role === "user",
                    "bg-muted": message.role !== "user",
                  }
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
