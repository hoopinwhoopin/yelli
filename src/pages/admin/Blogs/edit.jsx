import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, FileInput, Label, TextInput } from "flowbite-react";
import AdminLayout from "../../../components/AdminLayout";
import { editBlog, fetchOneBlog } from "../../../services/Blogs";

function EditBlog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();

  const { id } = useParams();

  const onSubmit = async (data) => {
    const coverImage = data.coverImage[0];
    const imageOne = data?.imageOne[0];
    const imageTwo = data?.imageTwo[0];
    const imageThree = data?.imageThree[0];
    const imageFour = data?.imageFour[0];
    const imageFive = data?.imageFive[0];
    const imageSix = data?.imageSix[0];
    const apiData = {
      ...data,
      coverImage,
      imageFive,
      imageFour,
      imageOne,
      imageThree,
      imageTwo,
      imageSix,
    };
    try {
      const response = await editBlog(id, apiData);
      if (response?.data) {
        navigate("/admin/blogs");
      } else {
        alert("Duplicate image Uploaded");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  const fetchBlog = async () => {
    const { data, error } = await fetchOneBlog(id);
    if (error) {
      throw new Error("Error while fetching Blog");
    } else {
      Object.keys(data[0]).forEach((key) => setValue(key, data[0][key]));
    }
  };

  useEffect(() => {
    if (id) {
      fetchBlog();
    }
  }, [id]);
  return (
    <div>
      <AdminLayout>
        <div className="p-5 w-1/2 mx-auto pt-20">
          <Card>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex items-center justify-end gap-5">
                <a href="/admin/blogs">
                  <Button color="gray">Back</Button>
                </a>
                <Button type="submit">Submit</Button>
              </div>
              <div>
                <div>
                  <Label
                    htmlFor="file-upload-helper-text"
                    value="Cover Image"
                  />
                </div>
                <FileInput
                  id="file-upload-helper-text"
                  helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("coverImage", { required: true })}
                />
                {errors.image && (
                  <p className="text-red-500 text-sm">Image is required</p>
                )}
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="title" value="Blog Title" />
                </div>
                <TextInput
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Blog Title"
                  required
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">Blog Title is required</p>
                )}
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="readingTime" value="Reading Time" />
                </div>
                <TextInput
                  id="readingTime"
                  name="readingTime"
                  type="number"
                  placeholder="Reading Time"
                  required
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("readingTime", { required: true })}
                />
                {errors.readingTime && (
                  <p className="text-red-500 text-sm">
                    Reading Time is required
                  </p>
                )}
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="tags" value="Tags" />
                </div>
                <TextInput
                  id="tags"
                  name="tags"
                  type="text"
                  placeholder="Tags"
                  required
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("tags", { required: true })}
                />
                {errors.tags && (
                  <p className="text-red-500 text-sm">
                    Reading Time is required
                  </p>
                )}
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Description" />
                </div>
                <TextInput
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Description"
                  required
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("description", { required: true })}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm">Last Name is required</p>
                )}
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="state" value="State" />
                </div>
                <TextInput
                  id="state"
                  name="state"
                  type="text"
                  placeholder="State"
                  required
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("state", { required: true })}
                />
                {errors.state && (
                  <p className="text-red-500 text-sm">State is required</p>
                )}
              </div>
              <div>
                <div>
                  <Label htmlFor="file-upload-helper-text" value="Image One" />
                </div>
                <FileInput
                  id="file-upload-helper-text"
                  helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("imageOne")}
                />
                <div className="mb-2 block">
                  <Label htmlFor="titleOne" value="Title One" />
                </div>
                <TextInput
                  id="titleOne"
                  name="titleOne"
                  type="text"
                  placeholder="Title One"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("titleOne")}
                />
                <div className="mb-2 block">
                  <Label htmlFor="descriptionOne" value="Description One" />
                </div>
                <TextInput
                  id="descriptionOne"
                  name="descriptionOne"
                  type="text"
                  placeholder="Description One"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("descriptionOne")}
                />
              </div>
              <div>
                <div>
                  <Label htmlFor="file-upload-helper-text" value="Image Two" />
                </div>
                <FileInput
                  id="file-upload-helper-text"
                  helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("imageTwo")}
                />
                <div className="mb-2 block">
                  <Label htmlFor="titleTwo" value="Title Two" />
                </div>
                <TextInput
                  id="titleTwo"
                  name="titleTwo"
                  type="text"
                  placeholder="Title Two"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("titleTwo")}
                />
                <div className="mb-2 block">
                  <Label htmlFor="descriptionTwo" value="Description Two" />
                </div>
                <TextInput
                  id="descriptionTwo"
                  name="descriptionTwo"
                  type="text"
                  placeholder="Description Two"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("descriptionTwo")}
                />
              </div>
              <div>
                <div>
                  <Label
                    htmlFor="file-upload-helper-text"
                    value="Image Three"
                  />
                </div>
                <FileInput
                  id="file-upload-helper-text"
                  helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("imageThree")}
                />
                <div className="mb-2 block">
                  <Label htmlFor="titleThree" value="Title Three" />
                </div>
                <TextInput
                  id="titleThree"
                  name="titleThree"
                  type="text"
                  placeholder="Title Three"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("titleThree")}
                />
                <div className="mb-2 block">
                  <Label htmlFor="descriptionThree" value="Description Three" />
                </div>
                <TextInput
                  id="descriptionThree"
                  name="descriptionThree"
                  type="text"
                  placeholder="Description Three"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("descriptionThree")}
                />
              </div>
              <div>
                <div>
                  <Label htmlFor="file-upload-helper-text" value="Image Four" />
                </div>
                <FileInput
                  id="file-upload-helper-text"
                  helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("imageFour")}
                />
                <div className="mb-2 block">
                  <Label htmlFor="titleFour" value="Title Four" />
                </div>
                <TextInput
                  id="titleOne"
                  name="titleOne"
                  type="text"
                  placeholder="Title One"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("titleOne")}
                />
                <div className="mb-2 block">
                  <Label htmlFor="descriptionFour" value="Description Four" />
                </div>
                <TextInput
                  id="descriptionFour"
                  name="descriptionFour"
                  type="text"
                  placeholder="Description Four"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("descriptionFour")}
                />
              </div>
              <div>
                <div>
                  <Label htmlFor="file-upload-helper-text" value="Image Five" />
                </div>
                <FileInput
                  id="file-upload-helper-text"
                  helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("imageFive")}
                />
                <div className="mb-2 block">
                  <Label htmlFor="titleFive" value="Title Five" />
                </div>
                <TextInput
                  id="titleFive"
                  name="titleFive"
                  type="text"
                  placeholder="Title Five"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("titleFive")}
                />
                <div className="mb-2 block">
                  <Label htmlFor="descriptionFive" value="Description Five" />
                </div>
                <TextInput
                  id="descriptionFive"
                  name="descriptionFive"
                  type="text"
                  placeholder="Description Five"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("descriptionFive")}
                />
              </div>
              <div>
                <div>
                  <Label htmlFor="file-upload-helper-text" value="Image Six" />
                </div>
                <FileInput
                  id="file-upload-helper-text"
                  helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("imageSix")}
                />
                <div className="mb-2 block">
                  <Label htmlFor="titleSix" value="Title Six" />
                </div>
                <TextInput
                  id="titleSix"
                  name="titleSix"
                  type="text"
                  placeholder="Title Six"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("titleSix")}
                />
                <div className="mb-2 block">
                  <Label htmlFor="descriptionSix" value="Description Six" />
                </div>
                <TextInput
                  id="descriptionSix"
                  name="descriptionSix"
                  type="text"
                  placeholder="Description Six"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("descriptionSix")}
                />
              </div>
            </form>
          </Card>
        </div>
      </AdminLayout>
    </div>
  );
}

export default EditBlog;
