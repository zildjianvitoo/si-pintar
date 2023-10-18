"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Heading from "@/components/Heading";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/Empty";
import Loader from "@/components/Loader";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

import { Download, ImageIcon } from "lucide-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";

import { axiosInstance } from "@/lib/axiosInstance";
import {
  amountOptions,
  imageGeneratorFormSchema,
  resolutionOptions,
} from "@/lib/formSchema";

import { Card, CardFooter } from "@/components/ui/card";
import { AxiosError } from "axios";
import { useProModal } from "@/hooks/useProModal";

export default function ImageGenerator() {
  const [images, setImages] = useState<string[]>([]);

  const router = useRouter();

  const { onOpen } = useProModal();

  const form = useForm<z.infer<typeof imageGeneratorFormSchema>>({
    resolver: zodResolver(imageGeneratorFormSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512",
    },
  });
  const { handleSubmit, formState, reset, getValues } = form;

  const { isSubmitting } = formState;

  const onSubmit = async (
    formValues: z.infer<typeof imageGeneratorFormSchema>
  ) => {
    try {
      setImages([]);
      const { data } = await axiosInstance.post("/api/image", formValues);

      const urls = data.map((image: { url: string }) => image.url);

      setImages(urls);

      reset();
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error?.response?.status === 403) {
          onOpen();
        }
      } else {
        toast.error("Terjadi kesalahan saat menggenerate kode");
      }
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <main>
      <Heading
        title="Generate Gambar"
        description="Ubah promptmu menjadi sebuah gambar."
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
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
                  <FormItem className="col-span-12 lg:col-span-6">
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
              <FormField
                name="amount"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                      disabled={isSubmitting}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {amountOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                name="resolution"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                      disabled={isSubmitting}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {resolutionOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <Button
                className="w-full col-span-12 bg-pink-700 hover:bg-pink-600 lg:col-span-2"
                disabled={isSubmitting}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="mt-5 space-y-4">
          {images.length === 0 && !isSubmitting && (
            <Empty label={"Tidak ada gambar yang digenerate"} />
          )}
          {isSubmitting && (
            <Loader amountImage={+getValues().amount} imageGeneration />
          )}
          <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {images.map((image) => (
              <Card key={image} className="overflow-hidden rounded-lg">
                <div className="relative aspect-square">
                  <Image fill src={image} alt={"gambar hasil prompt"} />
                </div>
                <CardFooter className="p-2">
                  <Button
                    variant={"secondary"}
                    className="w-full"
                    onClick={() => window.open(image)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
