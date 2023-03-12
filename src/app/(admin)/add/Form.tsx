"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ImageIcon, RockerIcon } from "@/icons";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!e.target.img.value) {
      toast.error("You need to add a image.");
    }
    console.log(e.target.img.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid w-full items-center gap-1.5 my-3">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="Name" required />
        </div>
        <div className="grid w-full items-center gap-1.5 my-3">
          <Label htmlFor="author">Author</Label>
          <Input type="text" id="author" placeholder="Author Name" required />
        </div>
        <div className="grid w-full items-center gap-1.5 my-3">
          <Label htmlFor="publication">Publication</Label>
          <Input
            type="text"
            id="publication"
            placeholder="Publication Name"
            required
          />
        </div>
        <div className="grid w-full items-center gap-1.5 my-3">
          <Label htmlFor="category">Category</Label>
          <Input
            type="text"
            id="category"
            placeholder="Category Name"
            required
          />
        </div>
        <div className="grid w-full items-center gap-1.5 my-3">
          <Label htmlFor="details">Details</Label>
          <Input type="text" id="details" placeholder="Extra Details" />
        </div>
        {/* price */}
        <div className="flex gap-2">
          <div className="grid w-full items-center gap-1.5 my-3">
            <Label htmlFor="price">Price</Label>
            <Input type="number" id="price" placeholder="Price" required />
          </div>
          <div className="grid w-full items-center gap-1.5 my-3">
            <Label htmlFor="discountPrice">Discount Price</Label>
            <Input
              type="number"
              id="discountPrice"
              placeholder="Discount Price"
            />
          </div>
        </div>
        <div className="grid w-full items-center gap-1.5 my-3">
          <Label htmlFor="description">Description</Label>
          <Textarea
            placeholder="Type book description here."
            id="description"
            rows={10}
            required
          />
        </div>

        <div className="flex items-center space-x-2 my-3">
          <label
            htmlFor="img"
            className="w-full h-64 border-2 border-dashed border-slate-300 flex items-center justify-center gap-2 text-slate-400 cursor-pointer"
          >
            <ImageIcon /> Upload book image.
          </label>
          <input
            type="file"
            name="img"
            id="img"
            accept="image/*"
            className="hidden"
          />
        </div>
        <div className="flex items-center space-x-2 my-3">
          <Switch name="inStock" id="inStock" />
          <Label htmlFor="inStock">Available in stock.</Label>
        </div>
        {/* submit button */}
        <div className="my-16">
          <Button className="w-full" type="submit">
            <RockerIcon className="mr-2 h-4 w-4" /> Publish the Book.
          </Button>
        </div>
      </form>

      <Toaster />
    </>
  );
};

export default Form;
