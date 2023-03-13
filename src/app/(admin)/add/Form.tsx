"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { DeleteIcon, ImageIcon, RockerIcon } from "@/icons";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const Form = () => {
  const [imgPreview, setImgPreview] = useState(null);
  const [imgFile, setImgFile] = useState(null);

  function handleImagePreview(e: any) {
    // Get the selected image file
    const imageFile = e.target.files[0];

    if (imageFile) {
      const reader = new FileReader();
      // Convert the image file to a string
      reader.readAsDataURL(imageFile);
      // FileReader will emit the load event when the data URL is ready
      // Access the string using result property inside the callback function
      reader.addEventListener("load", () => {
        // Get the data URL string
        // @ts-ignore
        setImgPreview(reader.result);
      });
    }
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    // accepting all inputs fields value as variables
    const _name = e.target.name.value,
      _author = e.target.author.value,
      _publication = e.target.publication.value,
      _category = e.target.category.value,
      _details = e.target.details.value,
      _price = e.target.price.value,
      _discountPrice = e.target.discountPrice.value,
      _description = e.target.description.value,
      _inStock = e.target.inStock.value,
      _img = imgFile;
    // the condition
    let conditions =
      !_name ||
      !_author ||
      !_publication ||
      !_category ||
      !_price ||
      !_img ||
      !_description;

    console.log(_img);
    // INFO: checking if the conditions match
    // INFO: if not, then it will throw an error with react-hot-toast
    if (conditions) {
      toast.error("Fill all the required inputs.");
      return;
    }
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

        <div className="flex items-center space-x-2 my-3 relative">
          {!imgPreview ? (
            <>
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
                onChange={(e) => {
                  handleImagePreview(e);
                  // @ts-ignore
                  setImgFile(e.target.files?.[0]);
                }}
                accept="image/*"
                className="hidden"
              />
            </>
          ) : (
            <>
              <img
                src={imgPreview}
                className="w-full h-auto rounded-lg"
                alt="preview"
              />
              <span
                className="absolute top-4 right-4 p-3 bg-rose-700 text-white rounded-full cursor-pointer"
                onClick={() => {
                  setImgPreview(null);
                  setImgFile(null);
                }}
              >
                <DeleteIcon size={20} />
              </span>
            </>
          )}
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
