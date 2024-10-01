"use client"
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Form, FormField, FormControl, FormItem } from "@/components/ui/form";

export default function HomeSearch() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const router = useRouter();
  const form = useForm<UniversalSearch>({
    defaultValues: { q }
  });
  function onSubmitValid(values: UniversalSearch) {
    // console.log(values)
    const { q: _q } = values;
    const urlSearchParams = new URLSearchParams();
    if (_q && _q !== "") urlSearchParams.set("q", _q);
    const urlSearchParamsString = urlSearchParams.toString();
    router.push(`/search${urlSearchParamsString ? `?${urlSearchParamsString}&limit=16` : ""}`);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitValid, console.error)}>
        <FormField
          control={form.control}
          name="q"
          render={({ field }) =>
            <FormItem>
              <FormControl>
                <div className="relative max-w-screen-lg mx-auto mb-20 md:mb-0">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <Input
                    type="search"
                    className="rounded-full p-2 bg-white pl-12 h-12 text-base lg:w-full border border-black"
                    placeholder="SEARCH"
                    {...field}
                    required
                  />
                </div>
              </FormControl>
            </FormItem>
          }
        />
      </form>
    </Form>
  )
}
